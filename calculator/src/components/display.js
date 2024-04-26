import React from "react";

function Display (props){
    return(
        <div>
           
            <input type="text" value={""} name="result"></input>
           
            <input type="text" value={"0"} name="userinput"></input>
          
        </div>
    );
}
export default Display;