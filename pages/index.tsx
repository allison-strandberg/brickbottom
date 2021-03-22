import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/Home.module.scss';

export default function Home() {
  return (
    <div className="bg-beige">
      <Head>
        <title>Brickbottom Open Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Brickbottom Open Studios" />
        <p>Happening here</p>
        <p className="description">
          May 1 &amp; 2, 2021 
        </p>
      </main>

      <Footer />
    </div>
  );
}
