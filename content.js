// PC・スマホ・NEWS・WORKS共通の管理データを読み込む。
// GitHub PagesなどHTTP(S)公開環境で利用してください（file://では動作しません）。
(async()=>{
 try {
  const response=await fetch('data/site.json',{cache:'no-cache'});
  if(!response.ok)throw new Error(`HTTP ${response.status}`);
  window.SDON_CONTENT=await response.json();
  window.dispatchEvent(new Event('sdon:content-ready'));
 }catch(e){ console.error('コンテンツを読み込めませんでした',e); document.body?.setAttribute('data-content-error','true'); }
})();
