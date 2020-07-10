import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchReviewsById } from "../redux/review/action";
import { useSelector } from "react-redux";

const ReviewList = ({ reviews, id }) => {
  const reviewsYesOrNo = reviews ? "Reviews!" : "No reviews yet";

  return <>{reviewsYesOrNo}</>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    reviews: bindActionCreators(reviews, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(ReviewList);
