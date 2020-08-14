import { Box } from '@material-ui/core';
import { Shop } from 'src/lib/api/models/Shop';

type Props = {
  shop: Shop;
};

export const ShopName: React.FC<Props> = ({ shop }) => {
  return <Box>{shop.name}</Box>;
};
