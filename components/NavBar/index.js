import Link from "next/link";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { selectWishlistCount } from "../../redux/count/selector";
import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";
import { selectToken } from "../../redux/user/selector";

export default function NavBar() {
  const wishlistCount = useSelector(selectWishlistCount);
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

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
          {loginLogoutControls}
          <li>
            <Link href="/wishlist">
              <a title="Wishlist">♡{wishlistCount}</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
