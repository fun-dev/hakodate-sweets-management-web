# 環境設定

## クローンとインストール

1. リポジトリをクローンします。
2. クローンが完了したら、ターミナルでクローンしたフォルダを開いて、依存関係をインストールします。

コマンド

```.shell
$ git clone https://github.com/fun-dev/hakodate-sweets-management-web.git # クローン
$ cd /path/to/hakodate-sweets-management-web # クローンしたフォルダに移動
$ yarn install # node_modules をインストール
```

## 環境変数の設定

1. ルートディレクトリに `.env.development.local` というファイルを作成します。
2. `.env` を開きこのファイルの内容をすべて`.env.development.local` にコピー＆ペーストします。(`.env` はサンプルなので、このファイルは編集してはいけません。)
3. `.env.development.local` にコピーした環境変数に、それぞれ適切な値を入れます。値は知っている人から聞いて下さい。

> firebase/admin の秘匿情報はインターネットに公開してはいけないため環境変数で管理します。firebase/client の config は第 3 者に悪用される恐れがないためコードに埋め込んでいます。`.env` は git で管理されるため、`.env` に本物の値を入れないように気をつけましょう。
