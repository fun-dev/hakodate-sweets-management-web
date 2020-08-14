import { Sweet } from 'src/lib/api/models/Sweet';
import { Box } from '@material-ui/core';

type Props = {
  categories: Sweet['small_categories'];
};

export const EditableCategories: React.FC<Props> = ({ categories }) => (
  <Box>
    {categories.map((category) => (
      <Box>{category.name}</Box>
    ))}
  </Box>
);
