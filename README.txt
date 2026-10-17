s-don WORKS タブ追加 v17

変更ファイル：works.html、works.js の2個だけです。
どちらもGitHubのリポジトリ最上位に配置してください。
既存のshared-design.css、site-header.js、data/site.json は変更しません。

追加タブ：MY ALBUM（先頭、category=album）
タブ順：MY ALBUM / Music Game Works / Game Works / Doujin Works / Other Works
直リンク：https://suudooon.github.io/works.html#album

【Sveltia CMS対応（別途手動編集）】
GitHubの admin/config.yml を開き、WORKSのcategoryフィールドの
optionsに、先頭の選択肢を追加：
    - { label: マイアルバム, value: album }

すでに修正済みの widget: datetime, type: date を戻さないため、
admin/config.yml はこのZIPに含めていません。

画像と作品情報はまだ追加していません。登録時にcategoryとしてalbumを選びます。
