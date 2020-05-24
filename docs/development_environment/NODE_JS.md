# Node.js
## macOS
### anyenv, nodenv
anyenvはnodenvやrbenvなどのプログラミング言語の複数のバージョンを管理する**env系をまとめて管理できるツールである．

anyenvからNode.jsのバージョン管理ツールのnodenvをインストールすることを推奨する．

```shell
# install anyenv
$ brew install anyenv
$ echo 'eval "$(anyenv init -)"' >> ~/.bash_profile # zshを使っている人は．~/.zprofile or ~/.zshrc
$ echo 'eval "$(anyenv init -)"' >> ~/.bash_profile # zshを使っている人は．~/.zprofile or ~/.zshrc
$ exec $SHELL -l
$ anyenv install --init
$ exec $SHELL -l

# install nodenv
$ anyenv install nodenv
$ exec $SHELL -l

# install node.js, npm, yarn
$ cat .node-version # > 12.16.3
$ nodenv install 12.16.3
$ npm i -g yarn
```

#### 参考
- [anyenv + macOS環境構築](https://qiita.com/rinpa/items/81766cd6a7b23dea9f3c)