import React, {useState} from "react";
import "./layout.css";
import logo from "../assets/images/logo1.jpg";
import Output from "./output";

const Layout = () => {
  let [input, setInput] = useState('0')
  let [result, setResult] = useState('')

  const handleClick = (event) => {
    const value = event.target.value;

    if(value === "="){
      if(input !== ""){
        let res = "";
        try{
          res = eval(input);
        }catch(err){
          setResult("math error");
        }
        if(res === undefined){
          setResult("math error")
        }else{
          setResult(input + "=")
          setInput(res)
        }
      }
    }else if(value === "C" ){
      setInput('0')
      setResult('')
    }else if(value === "DEL" ){
      try{
        let str = input;
        str = str.substr(0, str.length-1);
        setInput(str);
        if(input === "0"){
          setInput("0")
      }
     
      }catch (err){
        alert("CLEAR TO CONTINUE");
      }
    

    }else if(input ==="0"){
      setInput(value)
    }else{
      setInput(input += value)
    }
  };
  return (
    <div className="frame">
      <div className="calculator">
        <br></br>
        <Output user={input} answere={result}/>
        <br></br>

        <img src={logo} width="100px" />
        <br></br>
        <div className="keys">
          {/* ========================= section 1 ======================================= */}
          <input
            type="button"
            value={"C"}
            className="button clear"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"DEL"}
            className="button clear"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"%"}
            className="button operator"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"/"}
            className="button operator"
            onClick={handleClick}
          ></input>
          {/* ========================= section 1 ! ====================================== */}

          {/* ========================= section 2 ======================================= */}
          <input
            type="button"
            value={"7"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"8"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"9"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"*"}
            className="button operator"
            onClick={handleClick}
          ></input>
          {/* ========================= section 2 ! ====================================== */}

          {/* ========================= section 3 ======================================= */}
          <input
            type="button"
            value={"4"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"5"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"6"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"-"}
            className="button operator"
            onClick={handleClick}
          ></input>
          {/* ========================= section 3 ! ====================================== */}

          {/* ========================= section 1 ======================================= */}
          <input
            type="button"
            value={"1"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"2"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"3"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"+"}
            className="button operator"
            onClick={handleClick}
          ></input>
          {/* ========================= section 1 ! ====================================== */}

          {/* ========================= section 1 ======================================= */}

          <input
            type="button"
            value={"0"}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"."}
            className="button "
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"="}
            className="button equal-sign"
            onClick={handleClick}
          ></input>
          {/* ========================= section 1 ! ====================================== */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
