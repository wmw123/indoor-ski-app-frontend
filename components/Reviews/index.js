import fetch from "node-fetch";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "./style.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Reviews({ id }) {
  const { data: reviews, error } = useSWR(
    `http://localhost:4000/indoorskiplaces/${id}/reviews`,
    fetcher
  );

  if (error) {
    return <div>Error...</div>;
  }

  if (!reviews) {
    return <div>Loading...</div>;
  }

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
