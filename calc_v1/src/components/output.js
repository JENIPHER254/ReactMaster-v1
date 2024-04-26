import React from "react";
import OutputRow from "./outputRow";

const Output = () => {
    return (
        <div>
            <OutputRow value={99} textSize={{fontsize: '20px'}}/>
            <OutputRow value={100} textSize={{fontsize: '20px'}}/>
        </div>
    );
}

export default Output;