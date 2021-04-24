import Head from 'next/head';
import Layout from '../components/layout';
import Gallery from '../components/gallery';
import { getAllArtists, getArtistData } from '../lib/artists';

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
    fallback: false,
  }
}

export interface Name {
  first: string,
  last: string,
  full: string,
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
    <Layout fullName={name.full}>
      <Head>
        <title>{ name.full }</title>
      </Head>
      <Gallery artist={artist} pieces={pieces} />
    </Layout>
  )
}
