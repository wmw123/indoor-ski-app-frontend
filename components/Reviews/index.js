import fetch from "node-fetch";
import { useRouter } from "next/router";
import styles from "./style.module.css";

export default function Reviews(props) {
  //   const router = useRouter();
  //   const { id } = router.query;

  //   console.log("id from router", id);

  const reviews = props.reviews;

  return (
    <div className={styles.container}>
      {reviews.map((review, key) => {
        return (
          <div key={review.id}>
            <div className="rating">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              {review.rating}
            </div>
            <p>"{review.quote}"</p>
          </div>
        );
      })}
    </div>
  );
}
