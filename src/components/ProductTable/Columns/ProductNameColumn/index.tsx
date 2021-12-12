import { ProductTableColumn } from '../ColumnType';
import { EditableProductName } from './EditableProductName';
import { ProductName } from './ProductName';

export const productNameColumn: ProductTableColumn = {
  title: '商品名',
  field: 'name',
  align: 'left',
  editable: (_, rowData) => !rowData.from_rdf,
  render: (sweet) => <ProductName sweet={sweet} />,
  editComponent: ({ rowData, value, onChange }) => (
    <EditableProductName sweet={rowData} draftProductName={value} changeDraftProductName={onChange} />
  ),
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
