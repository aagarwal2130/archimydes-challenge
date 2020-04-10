import React from "react";
import { connect } from "react-redux";
import { getStoryDetails } from "../../global/Services";
import "./StoryReview.scss";

class StoryReview extends React.Component {
  componentDidMount() {
    this.props.getStoryDetails(this.props.match.params.id);
  }

  render() {
    const { story } = this.props;
    return (
      <div className="storyReviewContainer">
        <h1>Story Review</h1>
        <div className="mainContainer">
          <div className="dataSection">
            <label className="label" htmlFor="summary">
              Summary
            </label>
            <div>{story.summary}</div>
          </div>
          <div className="dataSection">
            <label className="label" htmlFor="description">
              Description
            </label>
            <div>{story.description}</div>
          </div>
          <div className="dataSection">
            <label className="label" htmlFor="type">
              Type
            </label>
            <div>{story.type}</div>
          </div>
          <div className="dataSection">
            <label className="label" htmlFor="complexity">
              Complexity
            </label>
            <div>{story.complexity}</div>
          </div>
          <div className="dataSection">
            <label className="label" htmlFor="estimatedHrs">
              Estimated Hrs of Completion
            </label>
            <div>{story.estimatedHrs}</div>
          </div>
          <div className="dataSection">
            <label className="label" htmlFor="cost">
              Cost
            </label>
            <div>{story.cost}</div>
          </div>
        </div>
        <div className="buttonsSection">
          <button className="greenButton">Accept</button>
          <button className="redButton">Reject</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    story: state.story.details,
  };
};

const mapDispatchToProps = { getStoryDetails };

export default connect(mapStateToProps, mapDispatchToProps)(StoryReview);
