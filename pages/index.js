import Head from "next/head";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import NavBar from "../components/NavBar";
import AddCount from "../components/AddCount";
import Link from "next/link";
import fetch from "node-fetch";

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
  const indoorskiplaces = allIndoorskiplacesData.indoorskiplaces;

  return (
    <>
      <Head>
        <title>Indoor Ski Places in the Netherlands</title>
        <meta
          name="description"
          content={`Check out all the ${indoorskiplaces.length} indoor ski places! Invite your friends and write a review now`}
        />
      </Head>
      <Layout>
        <img
          src="https://www.dagjeweg.nl/img/afb/0/2/7/r0-0d-300-225-1cf-kind_kinderpiste_snowplanet-1556270036.jpeg"
          alt="indoor ski places"
        ></img>
        <h2 className={utilStyles.headingLg}>
          Indoor Ski Places in the Netherlands
        </h2>
        <ul className={utilStyles.list}>
          {indoorskiplaces.map(({ id, name, website, location, imageUrl }) => (
            <li className={utilStyles.listItem} key={id}>
              <img src={imageUrl} alt={name}></img>
              {name}
              <br />
              {website}
              <br />
              {location}
              <br />
              <Link href="/[id]" as={`${id}`}>
                <a>Show details</a>
              </Link>
              <AddCount id={id} />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
