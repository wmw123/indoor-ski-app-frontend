import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Take a look at the first indoor ski place</p>
        <div>
          <a href="https://youtube.com">Show me!</a>
        </div>
      </section>
    </Layout>
  );
}
