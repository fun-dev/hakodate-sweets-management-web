import Head from 'next/head';
import { NextPage } from 'next';
import { AppDrawer } from 'src/components/Header';
import { SweetsTable } from 'src/components/SweetsTable';

const ShopsPage: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>函館スイーツデータ管理</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppDrawer title="商品">
          <SweetsTable />
        </AppDrawer>
      </main>
    </>
  );
};

export default ShopsPage;
