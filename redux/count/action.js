export const countActionTypes = {
  ADD: "ADD",
};

export const addCount = (id) => (dispatch) => {
  console.log("id in addCount", id);
  return dispatch({ type: countActionTypes.ADD, payload: id });
};
