import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';
import axios from 'src/lib/api/axios';
import { getSweetsRequest } from 'src/lib/api/requests/GetSweetsRequest';

type ServerSideProps = {
  sweets: any[];
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  const sweets = await getSweetsRequest();

  return {
    props: {
      sweets,
    },
  };
};

type Props = ServerSideProps;

const Home: NextPage<Props> = (props) => {
  console.log(props.sweets);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          {props.sweets.map((s) => (
            <li>{s.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
