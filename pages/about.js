import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import AddCount from "../components/AddCount";
import HeaderImage from "../components/HeaderImage";

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
        <HeaderImage h1="About" />
        <div>
          <p>
            A lot of cool facts about the ski indoor places in the Netherlands!
          </p>
        </div>
      </Layout>
    </>
  );
}
