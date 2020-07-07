import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { selectWishlist } from "../redux/count/selector";

export default function Wishlist({ indoorskiplaces }) {
  const wishlistItems = useSelector(selectWishlist);

  console.log("indoorskiplaces", indoorskiplaces.indoorskiplaces);
  const allIndoorskiplaces = indoorskiplaces.indoorskiplaces;

  // to do: compare indoorskiplaces.id with wishlistItems and make new array
  // const check = allIndoorskiplaces.filter((id) => id !== wishlistItems);
  // console.log("check", check);

  return (
    <>
      <Head>
        <title>Wishlist</title>
      </Head>
      <NavBar />
      <h1>Wishlist</h1>
      <ul>
        {wishlistItems.map((wishlistItem, key) => {
          return <li key={wishlistItem}>{wishlistItem}</li>;
        })}
      </ul>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/indoorskiplaces`);
  const indoorskiplaces = await res.json();

  return {
    props: {
      indoorskiplaces,
    },
  };
}
