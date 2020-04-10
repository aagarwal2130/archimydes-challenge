const initialState = {
  list: [],
  details: {},
};

export default (state = initialState, action) => {
  if (action.type === "SET_STORY_LIST") {
    return {
      ...state,
      list: [...action.payload],
    };
  } else if (action.type === "SET_CREATED_STORY") {
    return {
      ...state,
      created: action.payload,
    };
  } else if (action.type === "SET_STORY_DETAILS") {
    return {
      ...state,
      details: action.payload,
    };
  } else {
    return state;
  }
};
