import Link from "next/link";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <a href="mailto:willemijnmw@gmail.com" title="Home">
          Contact us
        </a>
        <a href="https://www.ridestore.com" title="Home">
          Shop!
        </a>
        <Link href="/">
          <a title="Home">Home</a>
        </Link>
        <Link href="/about">
          <a title="About">About</a>
        </Link>
      </div>
    </>
  );
}
