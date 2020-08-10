import { Box, Avatar } from '@material-ui/core';
import { Sweet } from 'src/lib/api/models/Sweet';

type Props = {
  sweet: Sweet;
};

export const SweetNameColumn: React.FC<Props> = ({ sweet }) => (
  <Box display="flex" alignItems="center">
    <Box marginRight={2} clone>
      <Avatar src={sweet.imagePath} />
    </Box>
    <p>{sweet.name}</p>
  </Box>
);
