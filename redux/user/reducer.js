import { userActionTypes } from "./action";

const userInitialState = {
  name: null,
  email: null,
};

export default function reducer(state = userInitialState, action) {
  switch (action.type) {
    case userActionTypes.LOGIN: {
      return { ...state, ...action.payload };
    }
    case userActionTypes.LOGOUT: {
      return { ...userInitialState, token: null };
    }

    default:
      return state;
  }
}
