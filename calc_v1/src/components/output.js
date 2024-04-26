import React from "react";
import OutputRow from "./outputRow";

const Output = props => {
    return (
        <div>
            <OutputRow value={props.answere} textSize={{fontsize: '10px'}}/>
            <OutputRow value={props.user} textSize={{fontsize: '60px'}}/>
        </div>
    );
}

export default Output;