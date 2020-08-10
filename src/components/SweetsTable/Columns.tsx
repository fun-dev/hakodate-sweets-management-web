import { Column } from 'material-table';
import { Sweet } from 'src/lib/api/models/Sweet';
import { Shop } from 'src/lib/api/models/Shop';
import { Box } from '@material-ui/core';
<<<<<<< HEAD
import { SweetNameColumn } from './Columns/SweetNameColumn';
=======
import { ShopNameColumn } from '../ShopNameColumn';
>>>>>>> master

export const columns: Array<Column<Sweet>> = [
  {
    title: '商品名',
    field: 'name',
    align: 'left',
    editable: 'never',
    render: (sweet) => <SweetNameColumn sweet={sweet} />,
  },
  {
    title: '価格',
    field: 'price',
    align: 'left',
    editable: 'onUpdate',
  },
  {
    title: '説明',
    field: 'description',
    align: 'left',
    editable: 'never',
  },
  {
    title: '大カテゴリ',
    field: 'large_category',
    align: 'left',
    render: (sweet) => <Box>{sweet.small_categories[0]?.large_category_id}</Box>,
    editComponent: (props) => <Box>{props.rowData.small_categories[0]?.large_category_id}</Box>,
  },
  {
    title: '小カテゴリ',
    field: 'small_categories',
    align: 'left',
    render: (sweet) => (
      <Box>
        {sweet.small_categories.map((smc) => (
          <span>{smc.name}</span>
        ))}
      </Box>
    ),
    editComponent: (props) => (
      <Box>
        {props.rowData.small_categories.map((smc) => (
          <span>{smc.name}</span>
        ))}
      </Box>
    ),
  },
  {
    title: '店舗名',
    field: 'shop',
    align: 'left',
    editable: 'onUpdate',
    render: (sweet) => <ShopNameColumn shopId={sweet.shop_id} />,
  },
];
