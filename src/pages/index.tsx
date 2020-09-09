import { NextPage, GetServerSideProps } from 'next';
import { Products } from 'src/components/partials/Products';
import nookies from 'nookies';
import { verifyIdToken } from 'src/lib/firebase/admin';

const ProductsPage: NextPage = () => {
  return (
    <>
      <Products />
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

export default ProductsPage;
