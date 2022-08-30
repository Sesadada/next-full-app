import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <Head>
        <title>Google</title>
        <meta name="google search" content="google search page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Search />
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
