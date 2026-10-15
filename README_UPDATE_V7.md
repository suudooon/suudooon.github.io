# s-don公式HP v7

## 修正点
- 全ページ共通の `site-header.js` + `shared-design.css` でヘッダーを表示（HOME / WORKS / ABOUT / NEWS）
- `index.html` NEWSのMOREからダイアログで全件表示（Esc/外側クリック/閉じるボタン）
- Amazon MusicアイコンはAmazon Music公式サイトで使用されているSVG URLを参照。白色ロゴ用の濃色背景を設定。外部ホスト依存が残るため公開環境での確認が必要。
- NEWSとWORKSは `data/` の共通データで自動更新

## 更新方法
ZIPを解凍し、リポジトリのルートへ中身をまとめてアップロード。同じ名前は上書きします。`site-header.js`、`news-overlay.js`は新規です。

## 注意
- デプロイ後の実ブラウザ表示は未検証。
- 既存の管理画面認証設定は変更していません。
- Amazon Musicの外部SVG読み込みが制限される環境では代替文字表示を別途用意してください。
