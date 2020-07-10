import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewReview } from "../../redux/review/action";
import { selectToken } from "../../redux/user/selector";

const AddReview = ({ indoorskiplaceId }) => {
  const [rating, setRating] = useState("");
  const [quote, setQuote] = useState("");
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(addNewReview(rating, quote, indoorskiplaceId));

    setRating("");
    setQuote("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Rating:{" "}
            <input
              type="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Quote:{" "}
            <input
              type="text"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Add review</button>
        </p>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  const { user } = state;
  return { userId: user.id };
}

export default connect(mapStateToProps, null)(AddReview);
