import fetch from "node-fetch";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Reviews({ id }) {
  const { data: reviews, error } = useSWR(
    `https://indoor-ski-backend.herokuapp.com/indoorskiplaces/${id}/reviews`,
    fetcher
  );

  if (error) {
    return <div>Error...</div>;
  }

  if (!reviews) {
    return <div>Loading reviews...</div>;
  }

  return (
    <>
      {reviews.map((review, key) => {
        return (
          <div key={review.id}>
            <div>
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
    </>
  );
}
