import axios from "axios";
import { selectToken } from "../user/selector";

export const reviewActionTypes = {
  ADD_REVIEW: "ADD_REVIEW",
};

export const reviewAddedToDb = (data) => (dispatch) => {
  return dispatch({ type: reviewActionTypes.ADD_REVIEW, payload: data });
};

export const addNewReview = (rating, quote, indoorskiplaceId) => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    try {
      const response = await axios.post(
        `https://indoor-ski-backend.herokuapp.com/review`,
        {
          rating,
          quote,
          indoorskiplaceId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(response.data);

      dispatch(reviewAddedToDb(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
