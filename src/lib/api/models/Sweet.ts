import { SmallCategory } from './SmallCategory';

export type Sweet = {
  id: number;
  shop_id: number;
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
