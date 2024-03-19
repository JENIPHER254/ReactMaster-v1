import React, { Component } from "react";

class ClassProps extends Component{
    render(){
        return <div><p><b>{this.props.name} </b> is learning {this.props.course}</p><div>{this.props.children}</div></div>
    }
}
export default ClassProps;