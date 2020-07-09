import Link from "next/link";
import styles from "./style.module.css";

export default function HeaderImage({ h1, imageUrl }) {
  const imageYesOrNo = imageUrl ? (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={styles.indoorskiplaceImage}
    />
  ) : (
    <div
      style={{ backgroundImage: `url(/images/testimage.jpg)` }}
      className={styles.indoorskiplaceImage}
    />
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