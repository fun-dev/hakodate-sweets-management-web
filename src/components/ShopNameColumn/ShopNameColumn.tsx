import React from 'react';
import { Box } from '@material-ui/core';
import { Shop } from 'src/lib/api/models/Shop';

type Props = {
  shop: Shop;
};

export const ShopNameColumn: React.FC<Props> = ({ shop }) => {
  return <Box>{shop.name}</Box>;
};
