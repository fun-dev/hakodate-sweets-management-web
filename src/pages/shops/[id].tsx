import { NextPage, GetServerSideProps } from 'next';
import { ShopDetail } from 'src/components/partials/ShopDetail';
import nookies from 'nookies';
import { verifyIdToken } from 'src/lib/firebase/admin';

type Props = {
  id: number;
};

type QueryParams = {
  id: string;
};

const ShopDetailPage: NextPage<Props> = ({ id }) => {
  return (
    <>
      <ShopDetail shopId={id} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props, QueryParams> = async (context) => {
  const cookies = nookies.get(context);
  const { verified } = await verifyIdToken(cookies.token);

  if (!verified) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
  }

  return {
    props: {
      id: parseInt(context.params.id),
    },
  };
};

export default ShopDetailPage;
