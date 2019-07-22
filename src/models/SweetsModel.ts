type SweetsModel = {
  id: number;
  shop_id: number;
  name: string;
  price: string;
  description: string;
  imagePath: string;
  large_category_id: number;
  small_category_ids: number[];
  created_at: string;
  updated_at: string;
  from_rdf: boolean;
};
export default SweetsModel;
