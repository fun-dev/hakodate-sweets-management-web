import { SmallCategory } from 'src/lib/api/models/Category';
import { ProductTableColumn } from '../ColumnType';
import { Categories } from './Categories';
import { EditableCategories } from './EditableCategories';
import { FilterComponent } from './FilterComponent';

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
  filtering: true,
  tooltip: 'カテゴリ',
  filterComponent: ({ columnDef, onFilterChanged }) => (
    <FilterComponent
      columnDef={columnDef as any /* columnDefの型定義がおかしいのでanyでキャスト */}
      onFilterChanged={onFilterChanged}
    />
  ),
  customFilterAndSearch: (filter: SmallCategory[], product) => {
    if (filter === undefined || filter === null || filter.length === 0) {
      return true;
    }
    return product.small_categories.reduce((_, category) => {
      return filter.map((f) => f.id).includes(category.id);
    }, false);
  },
};

// editComponentのprops.onChangeを実行すると，引数で渡したnewValueがsweet.small_categories(field)に代入される
