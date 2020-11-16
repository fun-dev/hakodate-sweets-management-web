import { ProductTableColumn } from '../ColumnType';

export const descriptionColumn: ProductTableColumn = {
  title: '説明',
  field: 'description',
  align: 'left',
  editable: 'never',
  sorting: false,
  width: 400,
  customFilterAndSearch: (filter: string, row) => {
    if (filter === undefined || filter === null || filter.length === 0) {
      return true;
    }

    if (row.description.includes(filter)) {
      return true;
    }

    return false;
  },
};
