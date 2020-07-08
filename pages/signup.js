import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import SignupUser from "../components/Signup";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta
          name={`Sign up`}
          content={`Sign up and let us know what you think!`}
        />
      </Head>
      <NavBar />
      <h1>Sign up</h1>

      <SignupUser />
    </>
  );
}
