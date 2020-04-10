import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/login/Login";
import Authorization from "./components/authorization/Authorization";
import CreateStory from "./components/createStory/CreateStory";
import StoryList from "./components/storyList/StoryList";
import StoryReview from "./components/storyReview/StoryReview";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" exact strict component={Login}></Route>
            <Authorization>
              <Route
                path="/createStory"
                exact
                strict
                component={CreateStory}
              ></Route>
              <Route
                path="/storyList"
                exact
                strict
                component={StoryList}
              ></Route>
              <Route
                path="/storyReview/:id"
                exact
                strict
                component={StoryReview}
              ></Route>
            </Authorization>

            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
