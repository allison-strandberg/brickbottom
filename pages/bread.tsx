import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout'

export default function Bread() {
  return (
    <Layout>
      <Head>
        <title>Bread</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Brickbottom bakery history"
        />
      </Head>
      <div className="flex items-center pt-20 mb-20 m-4 max-w-4xl font-open-sans text-white">
        <p className="mr-20 max-w-lg">
          One of the buildings that makes up Brickbottom was originally built in the 1920’s as a bakery for the A&P supermarket chain.
          One of the first to introduce “store-brand” products, the bakery made it possible for A&P to sell bread well below usual market price.
          This contributed to A&P surviving the Great Depression, where many other stores did not.
          <br /><br />
          (Image credit: Adam Levielle)
        </p>
        <Link href="/adam-leveille">
          <img
            className="border-4 border-gray-800 max-w-lg transition duration-300 hover:border-gray-500 cursor-pointer"
            src={require(`../public/images/adam-leveille/DailyBread.jpg`)}
          />
        </Link>
      </div>
    </Layout>
  );
}