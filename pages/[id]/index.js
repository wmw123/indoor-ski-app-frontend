import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import fetch from "node-fetch";
import Reviews from "../../components/Reviews";
import SharingButtons from "../../components/SharingButtons";
import AddCount from "../../components/AddCount";

export default function IndoorskiplacePage({ indoorskiplace }) {
  return (
    <>
      <Head>
        <title>Indoor ski place Page</title>
      </Head>
      <NavBar />
      <img src={indoorskiplace.imageUrl} alt={indoorskiplace.name}></img>
      <h2>{indoorskiplace.name}</h2>
      <p>{indoorskiplace.description}</p>
      <p>Type of facility: {indoorskiplace.facility}</p>
      <p>Rating: {indoorskiplace.rating}</p>
      <p>Average price per hour: €{indoorskiplace.priceAveragePerHour}</p>
      <AddCount />
      <h3>Invite your friends!</h3>
      <SharingButtons id={indoorskiplace.id} name={indoorskiplace.name} />
      <h3>Reviews</h3>
      <Reviews id={indoorskiplace.id} />
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
