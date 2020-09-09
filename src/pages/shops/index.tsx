import { NextPage, GetServerSideProps } from 'next';
import { Shops } from 'src/components/partials/Shops';
import nookies from 'nookies';
import { verifyIdToken } from 'src/lib/firebase/admin';

const ShopsPage: NextPage = () => (
  <>
    <Shops />
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const { verified } = await verifyIdToken(cookies.token);

  if (!verified) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
  }

  return { props: {} };
};

export default ShopsPage;
