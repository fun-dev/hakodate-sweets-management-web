# スタイリング

CSS を記述する方法は多岐にわたるが、本プロジェクトでは、Material-UI の[`<Box />`](https://material-ui.com/components/box/#box)コンポーネントを使用してスタイリングすることを原則とする。

## `<Box />` コンポーネントの使い方

https://material-ui.com/ja/components/box/#box

### コンテナ要素に CSS を適用する場合

`<Box />` コンポーネントは、ほぼ全ての CSS プロパティを props 経由で指定することができる。

以下の例を実行すると、`<Button />` コンポーネントを`<div>` で囲み、`<div>`に`margin: 8px`が適用される。

```.tsx
<Box margin={1}>
  <Button />
</Box>
```

変換イメージ

```.html
<div style="margin: 8px">
  <button />
</div>
```

#### 変換されるコンポーネント

`<Box />`はデフォルトで`<div />`に変換されるが、`component` prop で変換されるコンポーネントを指定することも可能である。

```.tsx
<Box component="span" margin={1}>
  <Button />
</Box>
```

#### Spacing

`margin` や `padding` などのスペース系は単位なしの数字で指定する。（例：`margin={1}`, `paddingRight={2}`）

spacing の`1`は`8px`に変換される。`2`だと`16px`、`0.5`だと`4px`となる。

これは、[src/styles/theme.ts](../../src/styles/theme.ts)で、`spacing`の単位を`8px`に設定しているからである。

```.ts
export const theme = createMuiTheme({
  spacing: 8,
});
```

### Material-UI のコンポーネント自身に CSS を適用する場合

`<Box />`コンポーネントの`clone`prop を指定すると、`<Box />`の**子要素に対して** CSS が設定される。さらに`clone`を指定した場合、`<Box />`自体は html 要素としてレンダーされない。

`<Button />`や`<AppBar />`などの Material-UI から import したコンポーネントにスタイルを適用した場合に`clone`を指定する。

```.tsx
<Box bgcolor="red" border="black solid 1px" clone>
  <Button>Box Styled Button 2</Button>
</Box>
```

変換イメージ

```.html

<button style="
  background-color: red;
  border: black solid 1px;
">
</button>
```

## サンプル

以下に動作を確認できるサンプルを作成したので、上記の説明で理解できない場合は見て下さい。

- コードあり: https://codesandbox.io/s/material-ui-box-styled-1co9i
- コードなし: https://1co9i.csb.app/

## なぜ `<Box />`でスタイリングするのか

Material-UI には`makeStyles`を使った CSS の記述([参考](https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/app-bar/ButtonAppBar.tsx))が一般的だが、 `<Box />`を使うのは以下の理由があるためである。

### 1. CSS のクラス名を指定する必要がない

前述の通り、`<Box />`は CSS のクラスを意識する必要がないため、若干楽に CSS を書くことができる。
`makeStyles`を使用する場合、スタイルに対応したクラス名を自分で定義する必要があるため、余計な負担が発生する。

### 2. スタイルが把握しやすい

前述の通り、`<Box />`は修飾するコンポーネントの近くにスタイルが記述されるため、スタイルを把握しやすい。

### 3. より少ない記述でスタイリングできる

`makeStyles`に比べて`<Box />`を使ったスタイリングは、より少ない記述量で同等のことができる。
`makeStyles`を使用したスタイリングは[サンプルコード](https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/app-bar/ButtonAppBar.tsx)を見て分かる通り、コード量が多くなってしまい見通しが悪くなる。
