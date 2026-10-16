(()=>{
 const slot=document.getElementById('featuredVideoInner'); if(!slot)return;
 const normalize=value=>{try{const u=new URL(String(value||''));if(!['https:','http:'].includes(u.protocol))return null;const h=u.hostname.toLowerCase().replace(/^www\./,'');let id='';if(h==='youtu.be')id=u.pathname.split('/')[1]||'';else if(['youtube.com','m.youtube.com','music.youtube.com','youtube-nocookie.com'].includes(h)){if(u.pathname==='/watch')id=u.searchParams.get('v')||'';else if(/^\/(shorts|embed|live)\//.test(u.pathname))id=u.pathname.split('/')[2]||'';}return /^[a-zA-Z0-9_-]{11}$/.test(id)?id:null}catch{return null}};
 const setup=()=>{const f=window.SDON_CONTENT?.featured||{};const id=normalize(f.youtube);slot.replaceChildren();if(!id){slot.parentElement.hidden=true;return;}slot.parentElement.hidden=false;
 const b=document.createElement('button');b.type='button';b.className='video-poster';b.setAttribute('aria-label','YouTube動画を再生');
 const im=document.createElement('img');im.src='https://i.ytimg.com/vi/'+id+'/hqdefault.jpg';im.alt='';im.loading='lazy';
 const play=document.createElement('span');play.className='video-play';play.textContent='▶';b.append(im,play);slot.append(b);
 b.addEventListener('click',()=>{const iframe=document.createElement('iframe');iframe.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';iframe.title='YouTube - '+(f.title||'s-don');iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';iframe.referrerPolicy='strict-origin-when-cross-origin';iframe.allowFullscreen=true;slot.replaceChildren(iframe)});
 };
 window.addEventListener('sdon:content-ready',setup);if(window.SDON_CONTENT)setup();
})();