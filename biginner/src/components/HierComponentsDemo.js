import React, { Component } from "react";
import UpdateComp from "./HierOrderMaster";

class Demo extends Component {
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
          {this.props.name} clicked <b>{count}</b> time
        </p>
      );
    }
  }
  export default UpdateComp(Demo) ;
  