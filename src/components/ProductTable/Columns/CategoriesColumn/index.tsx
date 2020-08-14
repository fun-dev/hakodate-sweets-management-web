import { ProductTableColumn } from '../ColumnType';
import { Categories } from './Categories';
import { EditableCategories } from './EditableCategories';

export const categoriesColumn: ProductTableColumn = {
  title: 'カテゴリ',
  field: 'categories',
  align: 'left',
  render: (sweet) => <Categories categories={sweet.small_categories} />,
  editComponent: ({ rowData: sweet }) => <EditableCategories categories={sweet.small_categories} />,
};
