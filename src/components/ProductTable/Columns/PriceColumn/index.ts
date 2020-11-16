import { ProductTableColumn } from '../ColumnType';

export const priceColumn: ProductTableColumn = {
  title: '価格',
  field: 'price',
  align: 'left',
  editable: 'never',
  width: '6rem',
  sorting: false,
  filtering: false,
};
