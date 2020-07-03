import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import NavBar from "../../components/NavBar";

export default function IndoorskiplacePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Indoor ski place Page</title>
      </Head>
      <NavBar />
      <p>This is indoorskiplace with id {router.query.id}</p>
    </>
  );
}
