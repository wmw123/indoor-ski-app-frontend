import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <h1>About</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <Link href="/">
          <a className="foo" target="_blank" rel="noopener noreferrer">
            Hello World
          </a>
        </Link>
      </Layout>
    </>
  );
}
