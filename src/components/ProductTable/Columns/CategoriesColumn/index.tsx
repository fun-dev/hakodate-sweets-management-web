import { ProductTableColumn } from '../ColumnType';
import { Categories } from './Categories';
import { EditableCategories } from './EditableCategories';

export const categoriesColumn: ProductTableColumn = {
  title: 'カテゴリ',
  field: 'small_categories',
  align: 'left',
  editable: 'onUpdate',
  render: (sweet) => <Categories categories={sweet.small_categories} />,
  editComponent: ({ rowData: sweet, onChange }) => (
    <EditableCategories sweet={sweet} changeDraftCategories={onChange} />
  ),
  width: 300,
  sorting: false,
};

// editComponentのprops.onChangeを実行すると，引数で渡したnewValueがsweet.small_categories(field)に代入される
