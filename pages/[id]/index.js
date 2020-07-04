import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import fetch from "node-fetch";
import Reviews from "../../components/Reviews";

export default function IndoorskiplacePage({ indoorskiplace }) {
  return (
    <>
      <Head>
        <title>Indoor ski place Page</title>
      </Head>
      <NavBar />
      <img src={indoorskiplace.imageUrl} alt={indoorskiplace.name}></img>
      <h2>{indoorskiplace.name}</h2>
      <h3>{indoorskiplace.description}</h3>
      <p>Type of facility: {indoorskiplace.facility}</p>
      <p>Rating: {indoorskiplace.rating}</p>
      <p>Average price per hour: €{indoorskiplace.priceAveragePerHour}</p>
      {/* <Link href={`${indoorskiplace.id}/[reviews]`} as={`${indoorskiplace.id}/reviews`}>
              <a>Show details</a>
            </Link> */}
      <Reviews />
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`http://localhost:4000/indoorskiplaces/${id}`);
  const indoorskiplace = await res.json();

  return {
    props: {
      indoorskiplace,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/indoorskiplaces");
  const allIndoorskiplacesData = await res.json();

  const ids = allIndoorskiplacesData.indoorskiplaces.map(
    (indoorskiplaceData) => indoorskiplaceData.id
  );
  const paths = ids.map((id) => ({ params: { id: `${id}` } }));

  return {
    paths,
    fallback: false,
  };
}
