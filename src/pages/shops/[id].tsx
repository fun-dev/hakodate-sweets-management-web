import { NextPage, GetServerSideProps } from 'next';
import { ShopDetail } from 'src/components/partials/ShopDetail';
import nookies from 'nookies';
import { verifyIdToken } from 'src/lib/firebase/admin';

const ShopDetailPage: NextPage = ({}) => {
  return (
    <>
      <ShopDetail />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const { verified } = await verifyIdToken(cookies.token);

  if (!verified) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
  }

  return { props: {} };
};

export default ShopDetailPage;
