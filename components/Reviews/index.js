import fetch from "node-fetch";
import { useRouter } from "next/router";

export default function Reviews(props) {
  //   const router = useRouter();
  //   const { id } = router.query;

  //   console.log("id from router", id);

  const reviews = props.reviews;

  return (
    <>
      {reviews.map((review, key) => {
        return (
          <div key={review.id}>
            <p>{review.rating}</p>
            <p>{review.rating}</p>
            <p>{review.quote}</p>
          </div>
        );
      })}
    </>
  );
}
