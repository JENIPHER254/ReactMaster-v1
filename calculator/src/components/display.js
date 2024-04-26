import React from "react";

function Display (props){
    return(
        <div>
            <div>
                {/* result */}
            <input type="text" value={""} name="result"></input>
            </div>
            <div>
                 {/* input */}
            <input type="text" value={"0"} name="userinput"></input>
            </div>
           
        </div>
    );
}
export default Display;