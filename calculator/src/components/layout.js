import React from "react";
import './layout.css'
function Layout  (props){
    const handleClick =() =>{};
    return (
        <div className="main-calc">
           
          <input value="C" type="button" className="button clear" onClick={handleClick}></input>
          <input value="DEL" type="button" className=" button delete" onClick={handleClick}></input>
          <input value="%" type="button" className="button operation" onClick={handleClick}></input>
          <input value="/" type="button" className="button operation" onClick={handleClick}></input>
          
          <input value="7" type="button" className="button" onClick={handleClick}></input>
          <input value="8" type="button" className="button" onClick={handleClick}></input>
          <input value="9" type="button" className="button" onClick={handleClick}></input>
          <input value="*" type="button" className="button operation" onClick={handleClick}></input>

          <input value="4" type="button" className="button" onClick={handleClick}></input>
          <input value="5" type="button" className="button" onClick={handleClick}></input>
          <input value="6" type="button" className="button" onClick={handleClick}></input>
          <input value="-" type="button" className="button operation" onClick={handleClick}></input>

          <input value="1" type="button" className="button" onClick={handleClick}></input>
          <input value="2" type="button" className="button" onClick={handleClick}></input>
          <input value="3" type="button" className="button" onClick={handleClick}></input>
          <input value="+" type="button" className="button operation" onClick={handleClick}></input>

          <input value="0" type="button" className="button" onClick={handleClick}></input>
          <input value="." type="button" className="button" onClick={handleClick}></input>
          <input value="=" type="button" className="button operation" onClick={handleClick}></input>
            
        </div>
    );
};
export default Layout