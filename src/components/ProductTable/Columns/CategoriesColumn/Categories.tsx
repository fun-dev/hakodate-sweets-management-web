import { Sweet } from 'src/lib/api/models/Sweet';
import { Box, Chip } from '@material-ui/core';

type Props = {
  categories: Sweet['small_categories'];
};

export const Categories: React.FC<Props> = ({ categories }) => (
  <Box display="flex" flexWrap="wrap">
    {categories.map((category) => (
      <Box key={category.id} margin={0.5} clone>
        <Chip label={category.name} />
      </Box>
    ))}
  </Box>
);
