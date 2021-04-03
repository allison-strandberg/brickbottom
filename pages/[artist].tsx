import Head from 'next/head'
import { getAllArtists, getArtistData } from '../lib/artists'

export async function getStaticProps({ params }) {
  const artistData = getArtistData(params.artist)
  return {
    props: {
      artistData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllArtists()
  return {
    paths,
    fallback: false
  }
}

export default function Artist({ artistData }) {
  return (
    <>
      <Head>
        <title>{artistData.name}</title>
      </Head>
      <div className="bg-beige">
        <h1 className="text-5xl md:text-8xl p-8 font-fredericka">{artistData.name}</h1>
      </div>
    </>
  )
}