import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <div className="text-center">
        <h1 className="text-5xl md:text-8xl p-8 font-fredericka">Brickbottom <br /> Open Studios</h1>
        <p className="text-3xl md:text-5xl p-8 font-josefin">
          May 1 &amp; 2, 2021 
        </p>
      </div>
    </Layout>
  );
}
