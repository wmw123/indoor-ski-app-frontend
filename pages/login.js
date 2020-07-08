import Head from "next/head";
import NavBar from "../components/NavBar";
import LoginUser from "../components/Login";

export default function Login() {
  return (
    <>
      <Head>
        <title>Log in</title>
        <meta
          name={`Log in to review indoor ski places`}
          content={`Log in and let us know what you think!`}
        />
      </Head>
      <NavBar />
      <div>
        <h1>Log in</h1>
        <LoginUser />
      </div>
    </>
  );
}
