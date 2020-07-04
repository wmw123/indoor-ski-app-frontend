import fetch from "node-fetch";

export default function Reviews({ reviews }) {
  console.log("reviews", reviews);

  return (
    <>
      <p>reviews</p>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/indoorskiplaces/1/reviews`);
  const reviews = await res.json();

  console.log("data in static props", reviews);

  return {
    props: {
      reviews,
    },
  };
}
