import React, { Component } from "react";

class pastShows extends Component {
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

export default pastShows;
