import { Sweet } from 'src/lib/api/models/Sweet';
import { SmallCategory } from 'src/lib/api/models/Category';
import { CategoriesSelect } from 'src/components/commons/CategoriesSelect';

type Props = {
  sweet: Sweet;
  changeDraftCategories: (newCategories: any) => void;
};

export const EditableCategories: React.FC<Props> = ({ sweet, changeDraftCategories }) => {
  const handleMenuClose = (selectedCategories: SmallCategory[]) => {
    changeDraftCategories(selectedCategories);
  };

  return <CategoriesSelect initialValue={sweet.small_categories} handleMenuClose={handleMenuClose} />;
};
