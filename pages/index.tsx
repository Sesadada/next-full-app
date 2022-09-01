import Head from 'next/head';
import Image from 'next/image';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  return (
    <section className="">
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
        <p>
          Google offered in:{' '}
          <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
            <a className="underline text-blue-600">Français</a>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
