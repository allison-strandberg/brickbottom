import Head from 'next/head'
import Layout from '../components/layout'
import Gallery from '../components/gallery'
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

export interface Piece {
  filename: string,
  title: string,
  materials?: string,
  location?: string,
  dimensions?: string,
  year?: string | number,
  price?: string | number,
  note?: string,
}

export type Pieces = Piece[]
export interface ArtistProps {
  artist: string,
  name: Name,
  pieces: Pieces,
}

export default function Artist ({ artist, name, pieces }: ArtistProps) {
  return (
    <Layout>
      <Head>
        <title>{ name.first } { name.middle } { name.last }</title>
      </Head>
      <div>
        <h1 className="text-4xl md:text-7xl p-8 font-fredericka text-center">{ name.first } { name.middle } { name.last }</h1>
      </div>
      <Gallery artist={artist} pieces={pieces} />
    </Layout>
  )
}
