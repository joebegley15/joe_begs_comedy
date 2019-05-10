import React, { Component } from "react";

class ShowCounter extends Component {
  constructor(props) {
    super(props);
    this.getPastShows = this.getPastShows.bind(this);
  }

  getPastShows() {}

  componentDidMount() {
    this.getPastShows();
  }
  render() {
    return <div />;
  }
}

export default ShowCounter;
