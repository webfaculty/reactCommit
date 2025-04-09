import React from "react";
import { useState } from "react";
import "../Css/MyCard.css";

const Card = (props) => {
  const [changes, setChanges] = useState(false);

  const changeState = () => {
    setChanges(!changes);
  };

  const showQuantContainer = () => {
    return changes === true
      ? "quantity-container"
      : "quantity-container-hidden ";
  };

  const changeColor = () => {
    return changes === true
      ? "card-container card-container-bg"
      : "card-container ";
  };

  return (
    <div className={changeColor()} onClick={changeState}>
      <div className="product-content-container">
        {/* <h1>{props.pid}</h1> */}
        <h1>{props.pdetails.pname}</h1>
        <p>{props.pdetails.pdesc}</p>
        {/* <p>{props.pdesc}</p> */}
      </div>

      {/* <div className="quantity-container-hidden"> */}
      <div className={showQuantContainer()}>
        <span className="quant">Quantity</span>
        <span className="zero">Zero</span>
        <button type="button" className="btn btn-inc">
          +
        </button>
        <button type="button" className="btn btn-dec">
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
