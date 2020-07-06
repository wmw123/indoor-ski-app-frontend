const reducer = (state = { tick: "init" }, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server,
        },
      };
    case "CLIENT_SERVER":
      return {
        ...state,
        server: {
          ...state.server,
          tick: action.payload,
        },
      };
    case "CLIENT_ACTION":
      return {
        ...state,
        client: {
          ...state.client,
          tick: action.payload,
        },
      };
    default:
      return state;
  }
};
