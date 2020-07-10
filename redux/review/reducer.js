import { reviewActionTypes } from "./action";

const reviewInitialState = {
  reviews: null,
};

export default function reducer(state = reviewInitialState, action) {
  switch (action.type) {
    case reviewActionTypes.ADD_REVIEW: {
      return { ...state, ...action.payload };
    }
    case reviewActionTypes.REVIEWS_LIST: {
      return { ...state, reviews: action.payload };
    }
    default:
      return state;
  }
}
