import React, { Fragment } from "react";
//import mealsImage from "../../assetss/meals.jpg";
import HeaderCartutton from "./HeaderCartutton";
//import CartItem from "../Cart/CartItem";
import classes from "./Header.module.css";



const Header = (props) => {
const sumbmissionHandler=(event)=>{
event.preventDefault();
}
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Medicines</h1>
        <label>medicine</label>
        <form onSubmit={sumbmissionHandler}>
        <input></input>
        <label>Price</label>
        <input></input>
        <button></button>
        </form>
        <HeaderCartutton onClick={props.onShowCart} />
      </header>
     {/* <div>
      <CartItem /></div>  */}
     
    </Fragment>
  );
};

export default Header;
