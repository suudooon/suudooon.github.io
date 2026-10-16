v13 — Doujin Works + 統一ヘッダー

ZIPを解凍し、次の3ファイルのみをGitHubリポジトリの最上位に配置してください:
 works.html / works.js / shared-design.css

index.html、admin/index.html、data/site.json は変更しません。

Sveltia CMSの WORKS 種別に「Doujin Works」を追加するには、GitHubの admin/config.yml 内で
「label: 種別, name: category, widget: select, options: ...」の1行に
{label: 同人作品, value: doujin} を追加してください。
例:
- { label: 種別, name: category, widget: select, options: [{label: 音楽ゲーム, value: rhythm}, {label: ゲーム, value: game}, {label: 同人作品, value: doujin}, {label: その他（文章のみ）, value: other}] }

※ config.yml はログイン成功後にユーザーが直した日付widget等を保護するため、この更新パックでは上書きしません。
※ Doujin Worksの作品は空の状態から始まります。CMS側でカテゴリを選び、既存作品または新規作品を追加してください。
※ HOME/WORKS/ABOUT/CONTACT は shared-design.css と site-header.js の共通ヘッダーを使います。
※ 反映されない場合は Ctrl+Shift+R で強制再読込してください。
