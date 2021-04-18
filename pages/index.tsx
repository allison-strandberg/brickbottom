import Head from 'next/head'
import Layout from '../components/layout'
import Window from '../components/window'
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
    <Layout>
      <Head>
        <title>Brickbottom Open Studios</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Visit the virtual Open Studios by Brickbottom artists"
        />
      </Head>
      {allArtistsData.map(({ artist, name }) => (
        <Window artist={artist} name={name} key={artist} />
      ))}
    </Layout>
  );
}
