import React from 'react';
import * as Layout from './Layout';
import { ShopInformation } from './ShopInformation';
import { ShopProducts } from './ShopProducts';
import { ShopCoupons } from './ShopCoupons';
import { Box, Link, ListItem, ListItemIcon, IconButton } from '@material-ui/core';
import { useShop } from 'src/lib/api/requests/useShop';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { theme } from 'src/styles/theme';
import { useRouter } from 'next/router';

const appHeaderHeight = 64;
const padding = theme.spacing(3);
const tableContainerHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px)`;
const headerHeight = 64;
const wrapperHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px - ${headerHeight}px)`;

type Props = {
  shopId: number;
};

export const ShopDetail: React.FC<Props> = ({ shopId }) => {
  const { data } = useShop({ id: shopId });
  const router = useRouter();

  return (
    <Box height={tableContainerHeight}>
      <Box display="flex" marginBottom={2}>
        <IconButton onClick={() => router.back()}>
          <ArrowBackIcon fontSize="default" />
        </IconButton>
        <Box fontSize={theme.typography.h4.fontSize}>{data?.shop.name}</Box>
      </Box>
      <Layout.Wrapper height={wrapperHeight}>
        <Layout.LeftItem>
          <ShopInformation shopId={shopId} />
        </Layout.LeftItem>
        <Layout.RightContainer>
          <Layout.TopRightItem>
            <ShopProducts shopId={shopId} />
          </Layout.TopRightItem>

          <Layout.BottomRightItem>
            <ShopCoupons />
          </Layout.BottomRightItem>
        </Layout.RightContainer>
      </Layout.Wrapper>
    </Box>
  );
};
