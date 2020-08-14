import { SmallCategory } from './SmallCategory';
import { Shop } from './Shop';

export type Sweet = {
  id: number;
  shop: Shop;
  name: string;
  price: string;
  description: string;
  imagePath: string;
  small_categories: SmallCategory[];
  created_at: string;
  updated_at: string;
  from_rdf: boolean;
  favorite: number;
};
