import React, { Component } from "react";

export class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  updateClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <p onClick={this.updateClick}>
        clicked <b>{count}</b> time
      </p>
    );
  }
}
export class Hover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  updateHover = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <p onMouseEnter={this.updateHover}>
        clicked <b>{count}</b> time
      </p>
    );
  }
}
