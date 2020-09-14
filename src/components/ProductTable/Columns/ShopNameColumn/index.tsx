import { ProductTableColumn } from '../ColumnType';
import { ShopName } from './ShopName';

export const shopNameColumn: ProductTableColumn = {
  title: '販売店舗',
  field: 'shop_name',
  align: 'left',
  editable: 'never',
  render: (sweet) => <ShopName shop={sweet.shop} />,
  width: '20rem',
};
