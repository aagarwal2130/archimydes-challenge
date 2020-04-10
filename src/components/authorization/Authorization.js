import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../redux/actions/Actions";

class Authorization extends React.Component {
  componentDidMount() {
    if (sessionStorage.getItem("LOGGED_IN_USER") === null) {
      this.props.history.push("/login");
    } else {
      this.props.loginUser(
        JSON.parse(sessionStorage.getItem("LOGGED_IN_USER"))
      );
    }
  }

  render() {
    if (this.props.loggedInUser) return this.props.children;
    else return null;
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.loggedInUser.user,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Authorization));
