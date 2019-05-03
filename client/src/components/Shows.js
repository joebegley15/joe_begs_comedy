import React, { Component } from "react";

import { Table } from "reactstrap";

import { connect } from "react-redux";
import { getShows } from "../actions/showActions";
import PropTypes from "prop-types";

class Shows extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getShows();
  }

  render() {
    const {
      shows: { shows }
    } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {shows.map(show => {
            return (
              <tr>
                <td>{`${show.date} ${show.time}`}</td>
                <td>{show.location}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

Shows.propTypes = {
  getShows: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ shows: state.shows });

export default connect(
  mapStateToProps,
  { getShows }
)(Shows);
