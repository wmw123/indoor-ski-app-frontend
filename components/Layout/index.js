import styles from "./layout.module.css";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
