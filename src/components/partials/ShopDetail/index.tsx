import React from 'react';
import * as Layout from './Layout';
import { ShopInformation } from './ShopInformation';
import { ShopProducts } from './ShopProducts';
import { ShopCoupons } from './ShopCoupons';
import { Typography, Box } from '@material-ui/core';
import { useShop } from 'src/lib/api/requests/useShop';

type Props = {
  shopId: number;
};

export const ShopDetail: React.FC<Props> = ({ shopId }) => {
  const { data } = useShop({ id: shopId });

  return (
    <>
      <div>{data?.shop.name}</div>
      <Layout.Wrapper>
        <Layout.LeftItem>
          <ShopInformation />
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
    </>
  );
};
