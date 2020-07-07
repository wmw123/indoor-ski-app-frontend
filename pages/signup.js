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
      </Head>
      <NavBar />
      <h1>Sign up</h1>

      <SignupUser />
    </>
  );
}
