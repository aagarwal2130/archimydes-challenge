import axios from "axios";
import * as services from "./Constants";
import * as actions from "../redux/actions/Actions";
import { setSessionStorage } from "../global/Utils";

export const authenticateUser = (params) => {
  return (dispatch) => {
    axios
      .post(services.AUTHENTICATION_API.url, params)
      .then((success) => {
        setSessionStorage(success.data);
        dispatch(actions.loginUser(success.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const getStoryList = () => {
  return (dispatch) => {
    axios
      .get(services.STORIES_API.url, {
        headers: {
          authorization: JSON.parse(sessionStorage.getItem("LOGGED_IN_USER"))
            .token,
        },
      })
      .then((success) => {
        dispatch(actions.setStoryList(success.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const createStory = (params) => {
  return (dispatch) => {
    axios
      .post(services.STORIES_API.url, params, {
        headers: {
          authorization: JSON.parse(sessionStorage.getItem("LOGGED_IN_USER"))
            .token,
        },
      })
      .then((success) => {
        dispatch(actions.setCreatedStory(success.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const getStoryDetails = (params) => {
  return (dispatch) => {
    axios
      .get(`${services.STORIES_API.url}/${params}`, {
        headers: {
          authorization: JSON.parse(sessionStorage.getItem("LOGGED_IN_USER"))
            .token,
        },
      })
      .then((success) => {
        dispatch(actions.setStoryDetails(success.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};
