import Link from "next/link";
import styles from "./style.module.css";

export default function HeaderImage({ h1, imageUrl }) {
  const imageYesOrNo = imageUrl ? (
    <img src={imageUrl} alt={h1}></img>
  ) : (
    <img src="/images/testimage.jpg" alt="indoor ski place"></img>
  );

  return (
    <>
      <div className={styles.container}>
        {imageYesOrNo}
        <h1>{h1}</h1>
      </div>
    </>
  );
}
