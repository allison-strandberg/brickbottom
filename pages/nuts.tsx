import Head from 'next/head'
import Layout from '../components/layout'

export default function Bread() {
  return (
    <Layout>
      <Head>
        <title>Spicy Rosemary Nuts</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Spicy Rosemary Nuts recipe"
        />
      </Head>
      <div className="flex flex-col pt-20 mb-20 m-4 pl-2 lg:pl-0 max-w-lg font-open-sans text-white">
        <h2 className="font-josefin font-bold text-xl text-center">Spicy Rosemary Nuts</h2>
        <h2 className="font-josefin font-bold text-center">by Joan White</h2>
        <ul className="list-disc my-4 mt-8">
          <li>2 ½ Tbs. unsalted butter</li>
          <li>2 tsp. crumbled dried rosemary</li>
          <li>1 tsp. sea salt</li>
          <li>½ tsp. or more New Mexican chili powder or ground cayenne pepper</li>
          <li>2 cups of raw pecan or walnut halves</li>
        </ul>
        <ol className="list-decimal my-4">
          <li>
            Preheat oven to 350°F. In a small saucepan melt butter with crumbled rosemary, chili powder and salt.
          </li>
          <li>
            Arrange nuts on a rimmed cookie sheet or roasting pan.
            Pour butter mixture over nuts and toss to distribute evenly
            (I line the pan with parchment paper to make cleanup easier).
          </li>
          <li>
            Bake for 10 minutes or more until lightly browned – I toss nuts at least once during the bake to make sure they cook evenly.
          </li>
        </ol>
        <p className="my-4">HINT: You can never make too much of these, so double the recipe!</p>
      </div>
    </Layout>
  );
}