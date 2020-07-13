import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { selectWishlist } from "../redux/count/selector";
import { selectUser } from "../redux/user/selector";
import HeaderImage from "../components/HeaderImage";
import utilStyles from "../styles/utils.module.css";
import SharingButtons from "../components/SharingButtons";
import AddCount from "../components/AddCount";

export default function Wishlist({ indoorskiplaces }) {
  const wishlistItems = useSelector(selectWishlist);
  const user = useSelector(selectUser);

  const allIndoorskiplaces = indoorskiplaces.indoorskiplaces;

  const list = allIndoorskiplaces.filter(function (allIndoorskiplace) {
    const id = allIndoorskiplace.id;

    const itemsOnTheList = wishlistItems.find(function (wishlistItem) {
      return wishlistItem === id;
    });

    return itemsOnTheList;
  });

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
        <HeaderImage h1="Wishlist" />
        <div className={utilStyles.default}>
          <h2>Check out your wishlist {user.name}!</h2>
          <ul>
            {wishlistItems.map((wishlistItem, key) => {
              const itemOnTheList = list.find(function (item) {
                return item.id === wishlistItem;
              });

              const info = () => {
                if (itemOnTheList == undefined) {
                  return "";
                } else {
                  return (
                    <>
                      <img
                        src={itemOnTheList.imageUrl}
                        style={{ maxWidth: "200px", maxHeight: "200px" }}
                      />
                      <p>{itemOnTheList.name}</p>
                      <div>
                        <AddCount id={itemOnTheList.id} />
                      </div>
                    </>
                  );
                }
              };

              const showInfo = info();

              return <li key={wishlistItem}>{showInfo}</li>;
            })}
          </ul>
          <SharingButtons />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://indoor-ski-backend.herokuapp.com/indoorskiplaces`
  );
  const indoorskiplaces = await res.json();

  return {
    props: {
      indoorskiplaces,
    },
  };
}
