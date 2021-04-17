import Head from 'next/head'
import { getAllArtists, getArtistData } from '../lib/artists'

export async function getStaticProps({ params }) {
  const artistData = getArtistData(params.artist)
  return {
    props: {
      ...artistData
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

export interface Name {
  first: string,
  last: string,
  middle?: string,
}

export interface ArtistProps {
  artist: string,
  name: Name
}

export default function Artist ({ artist, name }: ArtistProps) {
  return (
    <>
      <Head>
        <title>{ name.first }</title>
      </Head>
      <div className="bg-beige">
        <h1 className="text-4xl md:text-7xl p-8 font-fredericka text-center bg-teal">{ name.first } { name.middle } { name.last }</h1>
      </div>
    </>
  )
}
