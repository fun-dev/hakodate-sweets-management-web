# ディレクトリ構成

## `src/components`

`src/components`は以下のルールに従う。

```
├── commons
│   └── ${ComponentName}
│       ├── ${ComponentName}.tsx
│       └── index.ts
└── partials
    └── ${PageName}
        ├── ${ComponentName}
        │   ├── ${ComponentName}.tsx
        │   └── index.ts
        └── index.tsx
```

`${ComponentName}.tsx` の中でさらに分割可能な子コンポーネントがある場合、`${ComponentName}/${ChildComponentName}.tsx`を作成して、`${ComponentName}.tsx` で import して使用する。

### `/commons`

`/commons` 配下には、全ページで扱う共通したコンポーネントを配置する。

### `/partials`

`/partials`配下には、ページごとに使う部分的なコンポーネントを分割して配置する。

`partials/${PageName}/index.tsx` には `PageName` と同名のコンポーネント(`<PageName />`)を定義する。
そして、`<PageName />`コンポーネントで、そのページに必要なコンポーネントを呼び出して使用する。
このように構成することで、`<PageName />`コンポーネントは、各ページコンテンツ部分のエントリーポイントとなる。

例えば、Shops ページ(`/shops`)の場合、`src/components/partials/Shops/index.tsx` は次のようになる。

```.tsx
import { ShopList } from './ShopList';

export const Shops: React.FC = () => (
  <>
    <ShopList />
  </>
);
```

これを、 `src/pages/shops/index.tsx` で呼び出して使う。

```.tsx
import { NextPage } from 'next';
import { Shops } from 'src/components/partials/Shops';

const ShopsPage: NextPage = () => (
  <>
    <Shops />
  </>
);

export default ShopsPage;
```
