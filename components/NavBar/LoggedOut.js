import Link from "next/link";
import styles from "./style.module.css";

export default function LoggedOut() {
  return (
    <>
      <li>
        <Link href="/login">
          <a title="Log in">Log in</a>
        </Link>
      </li>
    </>
  );
}
