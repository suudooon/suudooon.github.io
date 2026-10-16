Doujin Worksのタブが #rhythm に戻る問題への修正（v14）

1. ZIPを解凍。
2. works.html と works.js の2ファイルをGitHubリポジトリのルートにアップロードして上書き。
3. GitHub Pagesが更新されたら https://suudooon.github.io/works.html#doujin を開いて確認。

原因：旧works.jsにはdoujinカテゴリーがなく、未対応タブをrhythmへフォールバックする実装があった。
対処：works.jsにdoujinを登録。works.htmlのscript URLへ?v=14を付け、以前のJSキャッシュを回避。
データ、HOME、ABOUT、adminは変更しません。
