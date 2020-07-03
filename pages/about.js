import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <NavBar />
      <h1>About</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
