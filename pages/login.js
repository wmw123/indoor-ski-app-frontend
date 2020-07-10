import Head from "next/head";
import LoginUser from "../components/Login";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Login() {
  return (
    <>
      <Head>
        <title>Log in</title>
        <meta
          name="description"
          content={`Log in and let us know what you think!`}
        />
      </Head>
      <Layout>
        <div className={utilStyles.default}>
          <h1>Log in</h1>
          <LoginUser />
        </div>
      </Layout>
    </>
  );
}
