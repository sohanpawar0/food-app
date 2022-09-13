import React ,{useContext} from "react";
import classes from "./HeaderCartButton.Module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/Cart-context";

const HeaderCartButton = (props) => {

   const cartctx=useContext(CartContext)


   const numberofitems =cartctx.items.reduce( (currval , item ) => {
    return currval+item.amount;
   },0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
    
      <span className={classes.badge}>{numberofitems}</span>
    </button>
  );
};
export default HeaderCartButton;