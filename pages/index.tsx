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
    <Layout home>
      {allArtistsData.map(({ artist, name }) => (
        <Window artist={artist} name={name} key={artist} />
      ))}
    </Layout>
  );
}
