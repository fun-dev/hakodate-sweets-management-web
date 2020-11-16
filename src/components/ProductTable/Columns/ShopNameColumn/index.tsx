import { Shop } from 'src/lib/api/models/Shop';
import { ProductTableColumn } from '../ColumnType';
import { FilterComponent } from './FilterComponent';
import { ShopName } from './ShopName';

export const shopNameColumn: ProductTableColumn = {
  title: '販売店舗',
  field: 'shop_name',
  align: 'left',
  editable: 'never',
  render: (sweet) => <ShopName shop={sweet.shop} />,
  sorting: false,
  filterComponent: ({ columnDef, onFilterChanged }) => (
    <FilterComponent columnDef={columnDef as any} onFilterChanged={onFilterChanged} />
  ),
  customFilterAndSearch: (filter: Shop[], product) => {
    if (filter === undefined || filter === null || filter.length === 0) {
      return true;
    }
    return filter.map((shop) => shop.id).includes(product.shop.id);
  },
};
