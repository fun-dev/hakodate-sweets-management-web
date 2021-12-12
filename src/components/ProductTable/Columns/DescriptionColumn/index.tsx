import { ProductTableColumn } from '../ColumnType';
import { EditableDescription } from './EditableDescription';

export const descriptionColumn: ProductTableColumn = {
  title: '説明',
  field: 'description',
  align: 'left',
  editable: (_, rowData) => !rowData.from_rdf,
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
  editComponent: ({ rowData, value, onChange }) => (
    <EditableDescription sweet={rowData} draftDescription={value} changeDraftDescription={onChange} />
  ),
};
