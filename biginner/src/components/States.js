import React, { useCallback } from "react";

class SatesDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "subscribe to Bytescape",
      sub: "subscribe",
    };
  }
  styles = {
    fontWeight: "bold",
    color: "teal",
  };
  styles2 = {
    fontStyle: "italic",
    color: "purple",
  };
  ButtonChange = () => {
    this.setState({
      message: "Hit the bell icon to nevermiss an update",
      sub: "subscribed",
    });
  };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <h3 style={this.styles2}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
      </div>
    );
  }
}
export default SatesDemo;
