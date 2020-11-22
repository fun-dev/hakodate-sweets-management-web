import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Paper, Box, Typography, ListItem, Divider, ListItemText, IconButton } from '@material-ui/core';
import Link from 'next/link';
import { useShop } from 'src/lib/api/requests/useShop';

type Props = {
  shopId: number;
};

export const ShopProducts: React.FC<Props> = ({ shopId }) => {
  const { data } = useShop({ id: shopId });

  return (
    <Box height="50%" clone>
      <Paper>
        <Box fontWeight="fontWeightMedium" fontSize="h5.fontSize" margin={1} padding={5}>
          取り扱い商品
        </Box>
        <Divider variant="middle" />
        <Link href={`/?shopIds=${shopId}`}>
          <ListItem button alignItems="center">
            <ListItemText primaryTypographyProps={{ variant: 'caption' }}>登録数</ListItemText>
            <ListItemText>1</ListItemText>
          </ListItem>
        </Link>
        <Divider variant="middle" />
      </Paper>
    </Box>
  );
};
