import { countActionTypes } from "./action";

const countInitialState = {
  wishlist: [],
};

export default function reducer(state = countInitialState, action) {
  switch (action.type) {
    case countActionTypes.ADD:
      const exists = state.wishlist.includes(action.payload);
      if (exists) {
        return {
          wishlist: state.wishlist.filter((id) => id !== action.payload),
        };
      } else {
        return { wishlist: [...state.wishlist, action.payload] };
      }
    default:
      return state;
  }
}
