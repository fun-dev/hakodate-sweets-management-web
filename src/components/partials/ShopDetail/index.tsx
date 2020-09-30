import React from 'react';
import * as Layout from './Layout';
import { ShopInformation } from './ShopInformation';
import { ShopProducts } from './ShopProducts';
import { ShopCoupons } from './ShopCoupons';
import { Box, Link, ListItem, ListItemIcon } from '@material-ui/core';
import { useShop } from 'src/lib/api/requests/useShop';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

type Props = {
  shopId: number;
};

export const ShopDetail: React.FC<Props> = ({ shopId }) => {
  const { data } = useShop({ id: shopId });

  return (
    <Box>
      <Box display="flex" margin={3}>
        <Link href="/shops">
          <ListItem button>
            <ListItemIcon>
              <ArrowBackIcon fontSize="default" />
            </ListItemIcon>
          </ListItem>
        </Link>
        <Box fontSize="h4.fontSize">{data?.shop.name}</Box>
      </Box>
      <Layout.Wrapper>
        <Layout.LeftItem>
          <ShopInformation shopId={shopId} />
        </Layout.LeftItem>
        <Layout.RightContainer>
          <Layout.TopRightItem>
            <ShopProducts />
          </Layout.TopRightItem>

          <Layout.BottomRightItem>
            <ShopCoupons />
          </Layout.BottomRightItem>
        </Layout.RightContainer>
      </Layout.Wrapper>
    </Box>
  );
};
