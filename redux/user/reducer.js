import { userActionTypes } from "./action";

const userInitialState = {
  //token: localStorage.getItem("token"),
  name: null,
  email: null,
};

export default function reducer(state = userInitialState, action) {
  switch (action.type) {
    case userActionTypes.LOGIN: {
      console.log("state?", state);
      //localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    }
    case userActionTypes.LOGOUT: {
      //localStorage.removeItem("token");
      return { ...userInitialState, token: null };
    }

    default:
      return state;
  }
}
