import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import count from "./count/reducer";
// import tick from './tick/reducer'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  count,
  //   tick,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);

// // store.ts

// import { createStore } from "redux";
// import { createWrapper, HYDRATE } from "next-redux-wrapper";

// // create your reducer
// const reducer = (state = { tick: "init" }, action) => {
//   switch (action.type) {
//     case HYDRATE:
//       return { ...state, ...action.payload };
//     case "TICK":
//       return { ...state, tick: action.payload };
//     default:
//       return state;
//   }
// };

// // create a makeStore function
// const makeStore = (context) => createStore(reducer);

// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, { debug: true });
