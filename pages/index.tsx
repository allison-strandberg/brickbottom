import Head from 'next/head';
import Image from 'next/image'
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/Home.module.scss';

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Head>
        <title>Brickbottom Open Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="relative h-screen">
          <Image
            layout="fill"
            className="object-center object-cover pointer-events-none opacity-50"
            src="/images/brick-wall.jpg"
            alt=""
          />
            <main>
              <div className="relative z-1 text-center">
              <h1 className="text-8xl p-8 font-fredericka">Brickbottom <br /> Open Studios</h1>
                <p className="text-5xl p-8 font-josefin">
                  May 1 &amp; 2, 2021 
                </p>
              </div>
            </main>
          <Footer />
        </div>
    </div>
  );
}
