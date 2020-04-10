import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { authenticateUser } from "../../global/Services";
import { loginUser } from "../../redux/actions/Actions";
import "./Login.scss";

class Login extends React.Component {
  componentDidMount() {
    this.handleLogin();
  }

  componentDidUpdate() {
    this.handleLogin();
  }

  handleLogin = () => {
    if (!isEmpty(this.props.loggedInUser)) {
      this.props.loggedInUser.user.role === "user"
        ? this.props.history.push("/createStory")
        : this.props.history.push("/storyList");
    } else if (sessionStorage.getItem("LOGGED_IN_USER") !== null) {
      this.props.loginUser(
        JSON.parse(sessionStorage.getItem("LOGGED_IN_USER"))
      );
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.authenticateUser({
      email: this.email.value,
      password: this.password.value,
      isAdmin: this.isAdmin.checked,
    });
  };

  render() {
    return (
      <form className="loginFormContainer" onSubmit={this.handleSubmit}>
        <img src={require("../../assets/image.png")} alt="logo" />
        <div className="emailSection">
          <input
            name="email"
            type="text"
            placeholder="Email"
            ref={(input) => {
              this.email = input;
            }}
          />
        </div>
        <div className="passwordSection">
          <input
            name="password"
            type="password"
            placeholder="Password"
            ref={(input) => {
              this.password = input;
            }}
          />
        </div>
        <div className="roleSection">
          <input
            type="checkbox"
            name="role"
            defaultChecked={false}
            ref={(input) => {
              this.isAdmin = input;
            }}
          />
          <label htmlFor="isAdmin">Login as Admin</label>
        </div>
        <div className="buttonSection">
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.loggedInUser,
});

const mapDispatchToProps = {
  authenticateUser,
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
