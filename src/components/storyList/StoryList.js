import React from "react";
import { connect } from "react-redux";
import { getStoryList } from "../../global/Services";
import { TABLE_HEADINGS } from "../../global/Constants";
import { compareValues, filterValues } from "../../global/Utils";
import { setStoryList } from "../../redux/actions/Actions";
import "./StoryList.scss";

class StoryList extends React.Component {
  componentDidMount() {
    this.props.getStoryList();
  }

  onRowClick = (id) => {
    this.props.history.push(`/storyReview/${id}`);
  };

  onTypeFilter = (event) => {
    this.props.setStoryList(
      this.props.storyList.filter(filterValues(event.target.value))
    );
  };

  render() {
    return (
      <React.Fragment>
        <h1>Story List</h1>
        <span>Filter By Type</span>
        <select className="eachElement" onChange={this.onTypeFilter}>
          <option>Select</option>
          <option value="enhancement">Enhancement</option>
          <option value="bugfix">Bugfix</option>
          <option value="development">Development</option>
          <option value="qa">QA</option>
        </select>
        <table className="storyListContainer">
          <thead>
            <tr>
              {TABLE_HEADINGS.map((heading, index) => {
                return heading.sortable ? (
                  <th
                    key={index}
                    onClick={() =>
                      this.props.setStoryList(
                        this.props.storyList.sort(compareValues(heading.value))
                      )
                    }
                  >
                    {heading.name}
                  </th>
                ) : (
                  <th key={index}>{heading.name}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.storyList.map((story) => (
              <tr key={story.id} onClick={() => this.onRowClick(story.id)}>
                <td>{story.id}</td>
                <td>{story.summary}</td>
                <td>{story.description}</td>
                <td>{story.type}</td>
                <td>{story.complexity}</td>
                <td>{story.estimatedHrs}</td>
                <td>{story.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storyList: state.story.list,
  };
};

const mapDispatchToProps = { getStoryList, setStoryList };

export default connect(mapStateToProps, mapDispatchToProps)(StoryList);
