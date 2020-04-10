import React from "react";
import { connect } from "react-redux";
import { createStory } from "../../global/Services";
import "./CreateStory.scss";

class CreateStory extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createStory({
      summary: this.summary.value,
      description: this.description.value,
      type: this.type.value,
      complexity: this.complexity.value,
      estimatedHrs: this.estimatedHrs.value,
      cost: this.cost.value,
    });
  };

  componentDidUpdate() {
    this.props.history.push("/storyList");
  }

  render() {
    return (
      <form className="loginFormContainer" onSubmit={this.handleSubmit}>
        <h1>Create Story</h1>
        <div className="dataSection">
          <div className="formLabel">
            <label htmlFor="summary">Summary</label>
          </div>
          <div className="formElement">
            <input
              className="eachElement"
              name="summary"
              type="text"
              placeholder="Enter summary"
              ref={(input) => (this.summary = input)}
            />
          </div>
        </div>
        <div className="dataSection">
          <div className="formLabel">
            <label htmlFor="description">Description</label>
          </div>
          <div className="formElement">
            <textarea
              className="eachElement"
              placeholder="Enter description"
              ref={(input) => (this.description = input)}
            />
          </div>
        </div>
        <div className="dataSection">
          <div className="formLabel">
            <label htmlFor="type">Type</label>
          </div>
          <div className="formElement">
            <select
              className="eachElement"
              ref={(select) => (this.type = select)}
            >
              <option value="enhancement">Enhancement</option>
              <option value="bugfix">Bugfix</option>
              <option value="development">Development</option>
              <option value="qa">QA</option>
            </select>
          </div>
        </div>
        <div className="dataSection">
          <div className="formLabel">
            <label htmlFor="complexity">Complexity</label>
          </div>
          <div className="formElement">
            <select
              className="eachElement"
              ref={(select) => (this.complexity = select)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="dataSection">
          <div className="formLabel">
            <label htmlFor="estimatedHrs">Estimated time for completion</label>
          </div>
          <div className="formElement">
            <input
              className="eachElement"
              name="estimatedHrs"
              type="text"
              placeholder="Enter estimated hrs."
              ref={(input) => (this.estimatedHrs = input)}
            />
          </div>
        </div>
        <div className="dataSection">
          <div className="formLabel">
            <label htmlFor="cost">Cost</label>
          </div>
          <div className="formElement">
            <span>$</span>
            <input
              className="costElement"
              name="cost"
              type="text"
              placeholder="Enter cost"
              ref={(input) => (this.cost = input)}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  created: state.story.created,
});
const mapDispatchToProps = { createStory };

export default connect(mapStateToProps, mapDispatchToProps)(CreateStory);
