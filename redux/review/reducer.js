import { reviewActionTypes } from "./action";

const reviewInitialState = {
  reviews: null,
};

export default function reducer(state = reviewInitialState, action) {
  switch (action.type) {
    case reviewActionTypes.ADD_REVIEW: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
