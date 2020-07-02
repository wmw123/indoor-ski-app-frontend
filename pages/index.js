import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedIndoorskiplacesData } from "../lib/indoorskiplaces";

export async function getStaticProps() {
  const allIndoorskiplacesData = getSortedIndoorskiplacesData();
  return {
    props: {
      allIndoorskiplacesData,
    },
  };
}

export default function Home({ allIndoorskiplacesData }) {
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
          {allIndoorskiplacesData.map(({ id, location, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {location}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
