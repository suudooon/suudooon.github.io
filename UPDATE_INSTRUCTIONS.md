# デザイン調整版 (2026-10-16)

- 英数字：Manrope、日本語：Noto Sans JP（Webフォント。読み込み不能時は端末標準で代替）
- HOME と WORKS のヘッダーは共通 CSS (`shared-design.css`) を使用
- WORKS の上部SNSアイコンは `header-social.js` で HOME と同じデータ (`data/site.json`) を参照
- MORE・リンクボタンなどの右上矢印を削除
- NEWS/ABOUT は今回デザイン対象外、既存の簡易ページ

## GitHubへの反映
`index.html`, `works.html`, `works.js`, `news.html`, `about.html` を更新し、`shared-design.css`, `header-social.js` を追加してください。
それ以外の既存ファイルは変更不要です。
