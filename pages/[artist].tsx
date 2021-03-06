import Head from 'next/head';
import Layout from '../components/layout';
import Gallery from '../components/gallery';
import Social from '../components/social';
import Video from '../components/video';
import { getAllArtists, getArtistData, getArtistsData } from '../lib/artists';

export async function getStaticProps({ params }) {
  const allArtistsData = await getArtistsData();
  const artistData = await getArtistData(params.artist)
  return {
    props: {
      ...artistData,
      allArtistsData,
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
  email?: string,
  website?: string,
  website2?: string,
  instagram?: string,
  address?: string,
  phone?: string,
  twitter?: string,
  facebook?: string,
  statement?: string,
  videoId?: string,
  videoId2?: string,
  allArtistsData?: ArtistProps[],
}

export default function Artist ({
  artist,
  name,
  pieces,
  email,
  website,
  website2,
  instagram,
  address,
  phone,
  twitter,
  facebook,
  statement,
  videoId,
  videoId2,
  allArtistsData,
}: ArtistProps) {
  return (
    <Layout fullName={name.full} allArtistsData={allArtistsData}>
      <Head>
        <title>{ name.full }</title>
      </Head>
      <div className="mt-20 flex flex-wrap lg:flex-nowrap justify-around bg-gray-700 pb-20">
        <div className="flex flex-col items-center">
          <Gallery artist={artist} pieces={pieces} />
          { (artist === 'alyson-schultz') && (
          <div
              className="statement m-2 py-8 text-white max-w-2xl"
              dangerouslySetInnerHTML={{ __html: statement }}
            />
          )}
          { videoId && <Video id={videoId} /> }
          { videoId2 && <Video id={videoId2} /> }
        </div>
        {(email || website || website2 || instagram || address || phone || twitter || facebook || statement ) && (
          <div className="text-white font-open-sans lg:w-1/4">
            <Social
              email={email}
              website={website}
              website2={website2}
              instagram={instagram}
              address={address}
              phone={phone}
              twitter={twitter}
              facebook={facebook}
            />
            { (artist !== 'alyson-schultz') && (
              <div
                className="statement py-8 px-2"
                dangerouslySetInnerHTML={{ __html: statement }}
              />
            )}
          </div>
        )}
      </div>
    </Layout>
  )
}
