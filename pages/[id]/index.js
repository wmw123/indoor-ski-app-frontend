import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import fetch from "node-fetch";
import { useDispatch, useSelector } from "react-redux";
import Reviews from "../../components/Reviews";
import SharingButtons from "../../components/SharingButtons";
import AddCount from "../../components/AddCount";
import AddReview from "../../components/AddReview";
import { selectToken } from "../../redux/user/selector";

export default function IndoorskiplacePage({ indoorskiplace }) {
  const token = useSelector(selectToken);

  const addReviewVisibleOrNot = token ? (
    <AddReview indoorskiplaceId={indoorskiplace.id} />
  ) : (
    "Log in or sign up to write a review"
  );

  return (
    <>
      <Head>
        <title>Indoor ski place {indoorskiplace.name}</title>
        <meta
          name={`${indoorskiplace.name} indoor ski place `}
          content={`Want to visit the ${indoorskiplace.facility} ${indoorskiplace.name}? Invite your friends and let's go!`}
        />
      </Head>
      <NavBar />
      <img src={indoorskiplace.imageUrl} alt={indoorskiplace.name}></img>
      <div>
        <h2>{indoorskiplace.name}</h2>
        <p>{indoorskiplace.description}</p>
      </div>
      <div>
        <p>Type of facility: {indoorskiplace.facility}</p>
        <p>Rating: {indoorskiplace.rating}</p>
        <p>Average price per hour: €{indoorskiplace.priceAveragePerHour}</p>
      </div>
      <div>
        <h3>Add this spot to your wishlist</h3>
        <AddCount id={indoorskiplace.id} />
      </div>
      <div>
        <h3>Write a reveiw</h3>
        {addReviewVisibleOrNot}
      </div>
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
