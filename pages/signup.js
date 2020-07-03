import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <NavBar />
      <h1>Sign up</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
