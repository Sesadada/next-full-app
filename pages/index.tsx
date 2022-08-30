import Head from 'next/head';
import Image from 'next/image';
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
      <div className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <Image
          src="/Google.svg"
          alt="Google Logo"
          width={272}
          height={92}
          priority
        />
        <Search />
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
