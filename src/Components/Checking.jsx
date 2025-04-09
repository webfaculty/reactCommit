import React from "react";
// import { useState } from "react";
import "../Css/MyCard.css";

const Card = (props) => {

  // const [changes,setChangesState] = useState(false);

  // const changeState=()=>
  // {
  //   setChangesState(!changes);
  //   // alert('Working properly');
  // }

  // const cardContainer=()=>
  // {
  //   return changes===true?"card-container card-new-color":"card-container card-old-color";
  // }

  // const showQuantityContainer=()=>
  // {
  //   return changes===true?"quantity-container":"quantity-container-hidden";
  // }

  return (
    // <div className={cardContainer()} onClick={changeState}>
     <div className="card-container"> 
      <div className="product-content-container">
        {/* <h1>{props.pid}</h1> */}
        <h1>{props.pdetails.pname}</h1>
        <p>{props.pdetails.pdesc}</p>
        {/* <p>{props.pdesc}</p> */}
      </div>

      {/* <div className={showQuantityContainer()}> */}
      <div className="quantity-container">
        <span className="quant">Quantity</span>
        <span className="zero">Zero</span>
        <button type="button" className="btn btn-inc">+</button>
        <button type="button" className="btn btn-dec">-</button>
      </div>

    </div>
  );
};

export default Card;
