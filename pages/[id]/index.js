import {
  getAllIndoorskiplacesIds,
  getIndoorskiplaceData,
} from "../../lib/indoorskiplaces";

export default function Indoorskiplace({ indoorskiplaceData }) {
  console.log("isp data in function", indoorskiplaceData);
  return <Layout>{indoorskiplaceData.name}</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllIndoorskiplacesIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const indoorskiplaceData = getIndoorskiplaceData(params.id);

  console.log("isp data in props", indoorskiplaceData);

  return {
    props: {
      indoorskiplaceData,
    },
  };
}
