import axios from "axios";

export const userActionTypes = {
  LOGIN: "LOGIN",
};

export const loginUser = (userWithToken) => (dispatch) => {
  console.log("userwithtoken", userWithToken);
  return dispatch({ type: userActionTypes.LOGIN, payload: userWithToken });
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email,
        password,
      });

      console.log("this is the response after login", response);

      dispatch(loginUser(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://localhost:4000/signup`, {
        name,
        email,
        password,
      });

      console.log(response.data);

      dispatch(loginUser(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
