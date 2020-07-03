import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Indoor Ski Places in the Netherlands";

export default function Layout({ children, home }) {
  return <div className={styles.container}>{children}</div>;
}
