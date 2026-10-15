window.addEventListener('sdon:content-ready',()=>{'use strict';
const items=Array.isArray(window.SDON_CONTENT?.works)?window.SDON_CONTENT.works:[];
const categories=['rhythm','game','other'];const names={rhythm:'MUSIC GAME',game:'GAME',other:'OTHER'};
const gallery=document.getElementById('gallery'),count=document.getElementById('total');const tabs=[...document.querySelectorAll('.tab')];
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeURL=s=>{const v=String(s||'').trim();return /^(https?:\/\/)/i.test(v)?v:''};
const imageURL=s=>{const v=String(s||'').trim();return (/^(assets\/(?:works|uploads)\/[a-z0-9._-]+\.(png|jpe?g|webp|avif)|https:\/\/[^\s]+)$/i.test(v))?v:''};
function draw(category){const shown=items.filter(v=>v.category===category).slice().sort((a,b)=>(Number(b.year)||0)-(Number(a.year)||0));count.textContent=shown.length+' works';
 tabs.forEach(t=>{const on=t.dataset.category===category;t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1});
 if(!shown.length){gallery.innerHTML='<p class="empty">このカテゴリの実績は準備中です。</p>';return}
 if(category==='other'){gallery.innerHTML='<div class="texts">'+shown.map(w=>`<article class="text-card"><span class="year">${escapeHTML(w.year||'')}</span><h2>${escapeHTML(w.title)}</h2><p>${escapeHTML(w.project)}</p><p>${escapeHTML(w.credit)}</p>${w.description?`<p>${escapeHTML(w.description)}</p>`:''}${safeURL(w.url)?`<a href="${escapeHTML(safeURL(w.url))}" target="_blank" rel="noopener noreferrer">詳細を見る</a>`:''}</article>`).join('')+'</div>';return}
 gallery.innerHTML='<div class="gallery">'+shown.map(w=>{const im=imageURL(w.image),url=safeURL(w.url);const cover=im?`<div class="cover"><img src="${escapeHTML(im)}" loading="lazy" alt="${escapeHTML(w.title)} ジャケット" onerror="this.remove();this.parentNode.classList.add('placeholder');this.parentNode.innerHTML='<span class=placeholder-mark>ARTWORK COMING SOON</span>'"></div>`:`<div class="cover placeholder"><span class="placeholder-mark">ARTWORK<br>COMING SOON</span></div>`;const desc=`${cover}<span class="tag">${names[category]} · ${escapeHTML(w.year||'')}</span><h2 class="work-title">${escapeHTML(w.title)}</h2><p class="project">${escapeHTML(w.project)}</p><p class="credit">${escapeHTML(w.credit)}</p>`;return `<article class="work-card">${url?`<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(w.title)} の詳細を見る">${desc}</a>`:desc}</article>`}).join('')+'</div>';
}
function select(v,changeHash=true){if(!categories.includes(v))v='rhythm';draw(v);if(changeHash)history.replaceState(null,'','#'+v)}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>select(t.dataset.category));t.addEventListener('keydown',e=>{if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;e.preventDefault();const n=(i+(e.key==='ArrowRight'?1:2))%3;tabs[n].focus();select(tabs[n].dataset.category)})});
window.addEventListener('hashchange',()=>select(location.hash.slice(1),false));select(location.hash.slice(1),false);
})();