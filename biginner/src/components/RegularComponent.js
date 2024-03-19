import React, { Component } from "react";

class RegularComp extends Component{
    render (){
        console.log("regular component render");
        return <div><p>This is a regular component <b>{this.props.name}</b></p></div>
    }
}
export default RegularComp;