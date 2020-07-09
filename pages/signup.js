import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import SignupUser from "../components/Signup";
import utilStyles from "../styles/utils.module.css";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta
          name="description"
          content={`Sign up and let us know what you think!`}
        />
      </Head>
      <Layout>
        <div className={utilStyles.default}>
          <h1>Sign up</h1>
          <SignupUser />
        </div>
      </Layout>
    </>
  );
}
