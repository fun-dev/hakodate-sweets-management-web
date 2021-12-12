import { ProductTableColumn } from '../ColumnType';
import { EditablePrice } from './EditablePrice';

export const priceColumn: ProductTableColumn = {
  title: '価格',
  field: 'price',
  align: 'left',
  editable: (_, rowData) => !rowData.from_rdf,
  width: '20rem',
  sorting: false,
  filtering: false,
  editComponent: ({ rowData, value, onChange }) => (
    <EditablePrice sweet={rowData} draftPrice={value} changeDraftPrice={onChange} />
  ),
};
