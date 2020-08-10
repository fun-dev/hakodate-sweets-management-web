import React from 'react';
import { useShop } from 'src/lib/api/requests/useShop';
import { Box } from '@material-ui/core';

type Props = {
  shopId: number;
};

export const ShopNameColumn: React.FC<Props> = ({ shopId }) => {
  const { data } = useShop({ id: shopId });
  return <Box>{data?.shops.name}</Box>;
};
