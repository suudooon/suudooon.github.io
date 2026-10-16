/* s-don shared header v15 – CSS isolated from page styles via Shadow DOM. */
(() => {
  const host = document.getElementById('shared-header');
  if (!host) return;
  const shadow = host.shadowRoot || host.attachShadow({mode:'open'});
  const pageName = location.pathname.split('/').pop().toLowerCase();
  const current = pageName === 'works.html' ? 'works' : pageName === 'about.html' ? 'about' : pageName === 'contact.html' ? 'contact' : 'home';
  const entries = [
    ['home','HOME','./'], ['works','WORKS','works.html'],
    ['about','ABOUT','about.html'], ['contact','CONTACT','contact.html']
  ];
  const icons = {
    x:'https://cdn.simpleicons.org/x/111111',
    spotify:'https://cdn.simpleicons.org/spotify/1DB954',
    youtube:'https://cdn.simpleicons.org/youtube/FF0033',
    bandcamp:'https://cdn.simpleicons.org/bandcamp/1DA0C3',
    booth:'https://booth.pm/favicon.ico'
  };
  const defaults = {
    x:'https://x.com/udonfor',
    spotify:'https://open.spotify.com/artist/04RZKj5Uv3F6vuuhcEQ1hM',
    youtube:'https://www.youtube.com/@s-don',
    bandcamp:'https://s-don.bandcamp.com/',
    booth:'https://s-don.booth.pm/'
  };
  const esc = v => String(v).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
  const nav = entries.map(([key,label,url])=>`<a href="${url}" ${key===current?'aria-current="page"':''}>${label}</a>`).join('');
  shadow.innerHTML = `
  <style>
    :host{display:block!important;width:100%;font-family:Manrope,'Noto Sans JP',Arial,sans-serif;color:#455166;}
    *,*::before,*::after{box-sizing:border-box}
    header{height:84px;background:#fff;border:0;margin:0;padding:0}
    .inner{max-width:1100px;margin:0 auto;padding:0 36px;height:100%;display:flex;align-items:center;justify-content:space-between;gap:22px}
    .left{display:flex;align-items:center;gap:22px;min-width:0}
    .identity{display:flex;align-items:center;gap:14px;flex:0 0 auto}
    .logo{display:inline-flex;align-items:center;flex:0 0 auto}
    .logo img{display:block;width:118px;height:auto}
    .caption{font-size:10px;font-weight:800;line-height:1.35;letter-spacing:1.2px;color:#8e97aa}
    .social{display:flex;align-items:center;gap:9px}
    .social a{height:32px;width:32px;display:inline-flex;align-items:center;justify-content:center;border:1px solid #e2eaf5;border-radius:9px;background:#fff;text-decoration:none;transition:background .15s}
    .social a:hover{background:#f5f9ff;border-color:#1680f8}
    .social img{display:block;width:18px;height:18px;object-fit:contain}
    nav{display:flex;align-items:center;gap:27px;flex:0 0 auto}
    nav a{color:#455166;text-decoration:none;border:0;background:none;font-size:12px;letter-spacing:.07em;font-weight:800;line-height:1.4;white-space:nowrap;padding:7px 0}
    nav a[aria-current="page"],nav a:hover{color:#1680f8}
    .stripe{height:3px;width:100%;background:linear-gradient(90deg,#8cc8ef 0%,#8cc8ef 36%,#e2b2d9 56%,#f2bfd1 68%,transparent 100%)}
    @media(max-width:850px) and (min-width:701px){.inner{padding:0 20px;gap:12px}.left{gap:10px}.identity{gap:7px}.social{gap:5px}.social a{width:28px;height:28px}nav{gap:14px}nav a{font-size:11px}}
    @media(max-width:700px){header{height:auto}.inner{padding:12px 16px 11px;flex-direction:column;align-items:stretch;gap:8px}.left{justify-content:space-between;gap:8px}.identity{gap:7px}.logo img{width:100px}.caption{font-size:8px;letter-spacing:.5px}.social{gap:3px}.social a{height:30px;width:28px;padding:3px;border:0}.social img{width:17px;height:17px}nav{justify-content:flex-end;gap:14px;flex-wrap:wrap}nav a{font-size:10px;letter-spacing:.04em;padding:3px 0}}
  </style>
  <header><div class="inner"><div class="left"><div class="identity"><a href="./" class="logo" aria-label="s-don HOME"><img src="assets/sdon-logo.png" alt="s-don"></a><span class="caption">OFFICIAL<br>WEBSITE</span></div><div class="social" id="social" aria-label="SNS・配信リンク"></div></div><nav aria-label="メインメニュー">${nav}</nav></div></header><div class="stripe" aria-hidden="true"></div>`;
  const render = () => {
    const parent = shadow.getElementById('social');
    if (!parent) return;
    parent.replaceChildren();
    const configured = Array.isArray(window.SDON_CONTENT?.social) ? window.SDON_CONTENT.social : [];
    for (const id of ['x','spotify','youtube','bandcamp','booth']) {
      const item = configured.find(v=>v.icon===id) || {};
      const url = /^https:\/\//.test(item.url||'') ? item.url : defaults[id];
      const a=document.createElement('a'); a.href=url; a.target='_blank'; a.rel='noopener noreferrer';
      a.title=item.label||id; a.setAttribute('aria-label',item.label||id);
      const im=document.createElement('img'); im.src=icons[id]; im.alt=''; im.loading='eager';
      a.appendChild(im);parent.appendChild(a);
    }
  };
  render();
  window.addEventListener('sdon:content-ready', render);
})();
