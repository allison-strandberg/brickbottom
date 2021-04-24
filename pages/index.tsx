import Head from 'next/head'
import Layout from '../components/layout'
import Building from '../components/building'
import { getArtistsData } from '../lib/artists'

export async function getStaticProps() {
  const allArtistsData = getArtistsData()
  return {
    props: {
      allArtistsData
    }
  }
}

export default function Home({ allArtistsData }) {
  return (
    <Layout home>
      <Head>
        <title>Brickbottom Open Studios</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Visit the virtual Open Studios by Brickbottom artists"
        />
      </Head>
      <Building allArtistsData={allArtistsData} />
    </Layout>
  );
}
