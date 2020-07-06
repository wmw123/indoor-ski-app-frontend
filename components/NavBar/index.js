import Link from "next/link";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { selectWishlistCount } from "../../redux/count/selector";

export default function NavBar({ count }) {
  const wishlistCount = useSelector(selectWishlistCount);

  return (
    <>
      <div className={styles.container}>
        <h1>Ski App</h1>
        <ul>
          <li>
            <Link href="/">
              <a title="Home">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a title="About">About</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a title="Sign up">Sign up</a>
            </Link>
          </li>
          <li>♡{wishlistCount}</li>
        </ul>
      </div>
    </>
  );
}
