import { combineReducers } from "redux";
import loggedInUser from "../reducers/LoginReducer";
import story from "../reducers/StoryReducer";

export default combineReducers({ loggedInUser, story });
