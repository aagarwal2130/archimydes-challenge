export const loginUser = (payload) => ({
  type: "LOGIN_USER",
  payload,
});

export const setStoryList = (payload) => ({
  type: "SET_STORY_LIST",
  payload,
});

export const setStoryDetails = (payload) => ({
  type: "SET_STORY_DETAILS",
  payload,
});

export const setCreatedStory = (payload) => ({
  type: "SET_CREATED_STORY",
  payload,
});
