import React from "react";
import "./layout.css";

const layout = () => {
  const handleClick = () => {};
  return (
    <div className="frame">
      <div className="calculator">
        <br></br>
        <img />
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
            className="button operator"
            onClick={handleClick}
          ></input>
          {/* ========================= section 1 ! ====================================== */}
        </div>
      </div>
    </div>
  );
};

export default layout;
