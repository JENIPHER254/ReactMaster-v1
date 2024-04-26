import React from "react";
import OutputRow from "./outputRow";

const Output = props => {
    return (
        <div>
            <OutputRow value={props.answere} textSize={{fontsize: '20px'}}/>
            <OutputRow value={props.user} textSize={{fontsize: '20px'}}/>
        </div>
    );
}

export default Output;