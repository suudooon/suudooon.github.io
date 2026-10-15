(()=>{
 const root=document.getElementById('shared-header'); if(!root)return;
 root.innerHTML=`<header class="site-header" id="global-header"><div class="header-inner"><div class="brand-social"><span class="brand-identity"><a class="brand" href="./" aria-label="s-don HOME"><img src="assets/sdon-logo.png" alt="s-don"></a><span class="brand-caption">OFFICIAL<br>WEBSITE</span></span><div class="social-top" id="socialTop" aria-label="音楽配信・SNS"></div></div><nav class="nav" aria-label="メインメニュー"><a href="./" data-nav="home">HOME</a><a href="works.html" data-nav="works">WORKS</a><a href="about.html" data-nav="about">ABOUT</a></nav></div></header><div class="pink-stripe"></div>`;
 const here=location.pathname.toLowerCase();
 const page=here.includes('works')?'works':here.includes('about')?'about':'home';
 const selected=root.querySelector(`[data-nav="${page}"]`);if(selected) selected.setAttribute('aria-current','page');
 const assets={x:'https://cdn.simpleicons.org/x/111111',spotify:'https://cdn.simpleicons.org/spotify/1DB954',youtube:'https://cdn.simpleicons.org/youtube/FF0033',bandcamp:'https://cdn.simpleicons.org/bandcamp/1DA0C3',booth:'https://booth.pm/favicon.ico'};
 const render=()=>{let el=document.getElementById('socialTop');if(!el||el.children.length)return;const social=window.SDON_CONTENT?.social||[];
 for(const id of ['x','spotify','youtube','bandcamp','booth']){let item=social.find(x=>x.icon===id)||{};let a=document.createElement('a');a.className='social-icon';a.title=item.label||id;a.setAttribute('aria-label',item.label||id);if(/^https:\/\//.test(item.url||'')){a.href=item.url;a.target='_blank';a.rel='noopener noreferrer'}else a.classList.add('notlinked');let img=document.createElement('img');img.className='brand-icon-image';img.alt='';img.src=assets[id];a.appendChild(img);el.appendChild(a);}};
 window.addEventListener('sdon:content-ready',render,{once:true});if(window.SDON_CONTENT)render();
})();
