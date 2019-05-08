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
    let {
      shows: { shows }
    } = this.props;
    const yesterday = Date.now() - 86400000;
    shows.forEach(show => {
      show.startInt = new Date(show.date).getTime();
      console.log(show.startInt, Date.now());
    });
    shows.sort((a, b) => (a.startInt > b.startInt ? 1 : -1));
    shows = shows.filter(show => show.startInt > yesterday);
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
            let date = show.date;
            date = new Date(date).toDateString();
            return (
              <tr key={show._id}>
                <td>{`${date} @ ${show.time}`}</td>
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
  shows: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ shows: state.shows });

export default connect(
  mapStateToProps,
  { getShows }
)(Shows);
