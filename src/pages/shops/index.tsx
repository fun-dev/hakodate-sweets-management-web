import { NextPage } from 'next';
import { ShopList } from 'src/components/ShopList';
import { useShops } from 'src/lib/api/requests/useShops';

const ShopsPage: NextPage = ({}) => {
  return (
    <>
      <ShopList />
    </>
  );
};

export default ShopsPage;
