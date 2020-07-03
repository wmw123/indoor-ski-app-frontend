import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <NavBar />
      <Layout>
        <h1>About</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
