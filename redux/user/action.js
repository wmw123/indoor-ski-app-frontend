import axios from "axios";

export const userActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  TOKEN_STILL_VALID: "TOKEN_STILL_VALID",
};

export const loginUser = (userWithToken) => (dispatch) => {
  return dispatch({ type: userActionTypes.LOGIN, payload: userWithToken });
};

export const logOut = () => ({ type: userActionTypes.LOGOUT });

const tokenStillValid = (userWithoutToken) => ({
  type: userActionTypes.TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        `https://indoor-ski-backend.herokuapp.com/login`,
        {
          email,
          password,
        }
      );

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
      const response = await axios.post(
        `https://indoor-ski-backend.herokuapp.com/signup`,
        {
          name,
          email,
          password,
        }
      );

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

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(
        `https://indoor-ski-backend.herokuapp.com/me`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // token is still valid
      dispatch(tokenStillValid(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
    }
  };
};
