import { ProductTableColumn } from './ColumnType';
import { productNameColumn } from './ProductNameColumn';
import { priceColumn } from './PriceColumn';
import { descriptionColumn } from './DescriptionColumn';
import { categoriesColumn } from './CategoriesColumn';
import { shopNameColumn } from './ShopNameColumn';

export const columns: Array<ProductTableColumn> = [
  productNameColumn,
  priceColumn,
  descriptionColumn,
  categoriesColumn,
  shopNameColumn,
];
