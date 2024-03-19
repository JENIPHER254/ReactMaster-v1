import React, { Component } from "react";
import PureComp from "./PureComponent";
import RegularComp from "./RegularComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "learning react",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "learning react" });
    },3000);
  }
  render() {
    console.log("parent component render");
    return (
      <div>
        <h2>I am the parent  component</h2>
      
        <RegularComp name={this.setState.name}/>
        <PureComp name={this.setState.name}/>
      </div>
    );
  }
}
export default ParentComp;
