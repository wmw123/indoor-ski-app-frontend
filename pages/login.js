import Head from "next/head";
import NavBar from "../components/NavBar";
import LoginUser from "../components/Login";

export default function Login() {
  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <NavBar />
      <div>
        <h1>Log in</h1>
        <LoginUser />
      </div>
    </>
  );
}
