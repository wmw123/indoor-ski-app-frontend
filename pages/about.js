import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import AddCount from "../components/AddCount";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content={`Want to learn more about indoor ski places in the Netherlands? Check out these tip, tricks and stats!`}
        />
      </Head>
      <Layout>
        <h1>About</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <div>
          <AddCount />
        </div>
      </Layout>
    </>
  );
}
