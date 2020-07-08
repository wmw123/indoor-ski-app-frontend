import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { selectWishlist } from "../redux/count/selector";
import WishlistItems from "../components/WishlistItem";

export default function Wishlist({ indoorskiplaces }) {
  const wishlistItems = useSelector(selectWishlist);

  const allIndoorskiplaces = indoorskiplaces.indoorskiplaces;

  const list = allIndoorskiplaces.filter(function (allIndoorskiplace) {
    const id = allIndoorskiplace.id;

    const itemsOnTheList = wishlistItems.find(function (wishlistItem) {
      return wishlistItem === id;
    });

    return itemsOnTheList;
  });

  // To do: display the filtered list instead of the wishlistitems
  // console.log("Did we get the filtered list?", list);

  return (
    <>
      <Head>
        <title>Wishlist</title>
        <meta
          name="description"
          content={`Invite your friends and let's go!`}
        />
      </Head>
      <Layout>
        <h1>Wishlist</h1>
        <ul>
          {wishlistItems.map((wishlistItem, key) => {
            return <li key={wishlistItem}>{wishlistItem}</li>;
          })}
        </ul>
      </Layout>
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
