export default (state = {}, action) => {
  if (action.type === "LOGIN_USER") {
    return {
      ...state,
      isSuccess: true,
      user: action.payload,
    };
  } else {
    return state;
  }
};
