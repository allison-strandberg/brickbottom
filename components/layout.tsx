import Head from 'next/head'
import Footer from '../components/footer';

export const siteTitle = 'Brickbottom Open Studios'

export default function Layout({ children, home }) {
  return (
    <div className="bg-beige">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Visit the virtual Open Studios by Brickbottom artists"
        />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  )
}