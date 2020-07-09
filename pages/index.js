import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import NavBar from "../components/NavBar";
import AddCount from "../components/AddCount";
import Link from "next/link";
import fetch from "node-fetch";
import Footer from "../components/Footer";

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
      <NavBar />
      <div className={utilStyles.container}>
        <h1>Indoor Ski Places in the Netherlands</h1>
        <div className={utilStyles.indoorskiplacesList}>
          {indoorskiplaces.map(({ id, name, imageUrl }) => (
            <div className={utilStyles.indoorskiplaceItem} key={id}>
              <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className={utilStyles.indoorskiplaceImage}
              >
                <div className={utilStyles.name}>
                  <br />
                  <AddCount id={id} />
                  <br />
                  <Link href="/[id]" as={`${id}`}>
                    <a>Show details</a>
                  </Link>
                </div>
                <p>{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
