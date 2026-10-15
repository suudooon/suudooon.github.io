# s-don 公式サイト CMS導入版（v1）

## 現在できていること
- HTML/CSSは共通でPCとスマホに自動対応。
- `data/site.json` にNEWS/RELEASE/WORKS/LINKを統合。
- `admin/config.yml` にNEWS・WORKSの画像アップロード欄を設定。
- `admin/` にDecap CMSの管理UIを追加。

## まだ必要な設定（重要）
1. GitHubの**公開**リポジトリを作り、ファイルをアップロードしてGitHub Pagesを有効化。
2. `admin/config.yml` の `repo:` に `ユーザー名/リポジトリ名` を記入。
3. GitHub OAuth AppとOAuthプロキシを設定し、`base_url:` のコメントを解除してURLを指定。認証情報（Client Secret）はリポジトリに入れないこと。
4. `https://<GitHub PagesのURL>/admin/` でログイン・画像アップロード・保存・公開を試験。
5. 動作確認が済んでからWixのDNSを切り替え、サイトプランを解約。ドメインは解約しない。

**本ZIPの状態では管理画面へのログイン・保存はまだ利用できません。**

## 動作確認
`python -m http.server 8000` でローカル起動し、`http://localhost:8000/works.html` で確認。
`file://` は `fetch` が制限されるため不可。

## データ更新
`data/site.json` は直接編集も可能。現在のNEWS/WORKSには仮の内容とリンク未設定が含まれます。
画像は `assets/uploads/` に保存される想定。NEWS一覧とトップ、WORKSはすべて同じJSONを読み込みます。

## 注意
- 管理画面のURLを知っているだけでは編集できません。GitHubのリポジトリ書込権限とOAuth認証が必要です。
- GitHub Pagesの公開リポジトリに保存された画像・データは公開されます。非公開情報は登録しないでください。
- アップロード画像の自動リサイズ・WebP変換は現時点で未実装です。
- NEWSやWORKSの文章・日付は公開前に検証してください。
