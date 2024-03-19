import React, { PureComponent } from "react";

class  PureComp extends PureComponent{
    render(){
        console.log("pure component render");
        return <div><p>This is a pure component <b>{this.props.name}</b></p></div>
    }
}
export default PureComp;