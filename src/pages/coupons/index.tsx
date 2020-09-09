import { NextPage, GetServerSideProps } from 'next';
import { Coupons } from 'src/components/partials/Coupons';
import nookies from 'nookies';
import { verifyIdToken } from 'src/lib/firebase/admin';

const CouponsPage: NextPage = () => {
  return (
    <>
      <Coupons />
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

export default CouponsPage;
