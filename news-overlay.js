(()=>{
 const dialog=document.getElementById('newsDialog'),more=document.getElementById('newsMore'),close=document.getElementById('newsClose'),target=document.getElementById('newsDialogList');if(!dialog||!more)return;
 const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const safe=s=>/^https:\/\//.test(String(s||''))?String(s):'';
 const open=()=>{const news=window.SDON_CONTENT?.news||[];target.replaceChildren();
 for(const n of news.slice().sort((a,b)=>String(b.date).localeCompare(String(a.date)))){const item=document.createElement('article');item.className='news-popup-item';const pic=document.createElement('img');pic.src=n.image||'assets/release.jpg';pic.loading='lazy';pic.alt='';const body=document.createElement('div');const time=document.createElement('time');time.textContent=n.date||'';const title=document.createElement('h3');title.textContent=n.title||'';body.append(time,title);if(safe(n.url)){let a=document.createElement('a');a.href=n.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='詳しく見る';body.append(a)}item.append(pic,body);target.append(item)}dialog.showModal();close.focus()};
 more.addEventListener('click',open);close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
})();
