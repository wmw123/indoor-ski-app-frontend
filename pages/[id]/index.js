import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import fetch from "node-fetch";

export default function IndoorskiplacePage({ indoorskiplacesData }) {
  const router = useRouter();

  console.log("indoorskiplacesData", indoorskiplacesData);

  return (
    <>
      <Head>
        <title>Indoor ski place Page</title>
      </Head>
      <NavBar />
      <h2>name</h2>
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`http://localhost:4000/indoorskiplaces/${id}`);
  const indoorskiplacesData = await res.json();

  return {
    props: {
      indoorskiplacesData,
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
