import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/indoorskiplaces");
  const allIndoorskiplacesData = await res.json();

  return {
    props: {
      allIndoorskiplacesData,
    },
  };
}

export default function Home({ allIndoorskiplacesData }) {
  //console.log("allIndoorskiplacesData", allIndoorskiplacesData.indoorskiplaces);

  const indoorskiplaces = allIndoorskiplacesData.indoorskiplaces;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Take a look at the first indoor ski place</p>
        <div>
          <a href="https://youtube.com">Show me!</a>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          Indoor Ski Places in the Netherlands
        </h2>
        <ul className={utilStyles.list}>
          {indoorskiplaces.map(
            ({ id, name, website, location, priceAveragePerHour, rating }) => (
              <li className={utilStyles.listItem} key={id}>
                {name}
                <br />
                {website}
                <br />
                {location}
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
