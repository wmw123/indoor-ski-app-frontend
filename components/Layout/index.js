import styles from "./layout.module.css";
import NavBar from "../NavBar";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
}
