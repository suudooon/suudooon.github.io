# s-don v9 更新ガイド

- v8ヘッダーCSSを引き継ぎ、ホーム動画（URL入力によるクリック再生）、ABOUTプロフィール、Amazonアイコンを調整。
- 変更は HOME / ABOUT / shared-design.css / featured-video.js / data/site.json / admin/config.yml / assets/profile-placeholder.svg。必ず各ファイルをルート相対でアップロード。
- 動画は CMSのLatest Release→YouTube URL に通常のyoutube.com/watch?v=...、youtu.be/...、shorts URL を入力。動画はジャケットとは別の16:9枠に表示。クリックして初めてプレイヤーを読み込む。
- ABOUT画像はCMS→ABOUT（プロフィール）の「プロフィール画像」からアップロード。現時点の仮アイコンを差し替えてください。
- Aboutの主な実績は確認済みの例。より正確な年・詳細・仕事のご依頼先は公開前に確認してください。
- 注意: 管理画面はOAuth認証の構築前には保存・公開ができません。GitHub Pagesの公開は可能ですが、CMSから編集するには別途OAuth設定が必要です。
- `data/site.json` は既存内容をベースに更新したサンプル。もし公開後にGitHub上で編集済みなら差分マージが必要です。上書きしないでください。
- Amazonスマイル単独はブランドガイドの利用制限があるため、Amazonの識別しやすいロゴ（Simple IconsのAmazonロゴ）を暫定使用。正式なAmazon Musicロゴ素材の利用を推奨します。
