import { ProductTableColumn } from '../ColumnType';
import { ProductName } from './ProductName';

export const productNameColumn: ProductTableColumn = {
  title: '商品名',
  field: 'product_name',
  align: 'left',
  editable: 'never',
  render: (sweet) => <ProductName sweet={sweet} />,
  width: '20rem',
  sorting: false,
  customFilterAndSearch: (filter: string, row) => {
    if (filter === undefined || filter === null || filter.length === 0) {
      return true;
    }

    if (row.name.includes(filter)) {
      return true;
    }

    return false;
  },
};
