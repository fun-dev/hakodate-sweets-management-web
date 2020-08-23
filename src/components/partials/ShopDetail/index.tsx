import * as Layout from './Layout';
import { ShopInformation } from './ShopInformation';
import { ShopProducts } from './ShopProducts';
import { ShopCoupons } from './ShopCoupons';

export const ShopDetail: React.FC = () => (
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
);
