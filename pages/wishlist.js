import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import AddCount from "../components/AddCount";

export default function Wishlist() {
  return (
    <>
      <Head>
        <title>Wishlist</title>
      </Head>
      <NavBar />
      <h1>Wishlist</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
