import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import fetch from "node-fetch";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../redux/user/selector";
import styles from "./style.module.css";
import Layout from "../../components/Layout";
import Reviews from "../../components/Reviews";
import SharingButtons from "../../components/SharingButtons";
import AddCount from "../../components/AddCount";
import AddReview from "../../components/AddReview";
import HeaderImage from "../../components/HeaderImage";

export default function IndoorskiplacePage({ indoorskiplace }) {
  const token = useSelector(selectToken);

  const addReviewVisibleOrNot = token ? (
    <AddReview indoorskiplaceId={indoorskiplace.id} />
  ) : (
    <div>
      <p>Log in or sign up to write a review</p>
      <Link href="/login">
        <a title="About">Log in</a>
      </Link>
      <br />
      <Link href="/signup">
        <a title="About">Sign up</a>
      </Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>Indoor ski place {indoorskiplace.name}</title>
        <meta
          name="description"
          content={`Want to visit the ${indoorskiplace.facility} ${indoorskiplace.name}? Invite your friends and let's go!`}
        />
      </Head>
      <Layout>
        <HeaderImage
          h1={indoorskiplace.name}
          imageUrl={indoorskiplace.imageUrl}
        />
        <section className={styles.container}>
          <div className={styles.wishlist}>
            <h3>Add this spot to your wishlist</h3>
            <AddCount id={indoorskiplace.id} />
          </div>
          <div className={styles.invite}>
            <h3>Invite your friends!</h3>
            <div className={styles.inviteItems}>
              <SharingButtons
                id={indoorskiplace.id}
                name={indoorskiplace.name}
              />
            </div>
          </div>

          <div className={styles.description}>
            <p>{indoorskiplace.description}</p>
          </div>
          <div className={styles.info}>
            <p>Type of facility: {indoorskiplace.facility}</p>
            <p>Overall rating: {indoorskiplace.rating}</p>
            <p>Average price per hour: €{indoorskiplace.priceAveragePerHour}</p>
          </div>
          <div className={styles.logo}>logo</div>

          <div className={styles.review}>
            <h3>Reviews</h3>
            <Reviews id={indoorskiplace.id} />
          </div>

          <div className={styles.addReview}>
            <h3>Write a review</h3>
            {addReviewVisibleOrNot}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(
    `https://indoor-ski-backend.herokuapp.com/indoorskiplaces/${id}`
  );
  const indoorskiplace = await res.json();

  return {
    props: {
      indoorskiplace,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://indoor-ski-backend.herokuapp.com/indoorskiplaces"
  );
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
