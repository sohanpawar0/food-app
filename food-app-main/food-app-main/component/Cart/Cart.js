import React ,{ useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/Cart-context";


const Cart = (props) => {
  const ctx =useContext(CartContext)
  console.log(ctx.items);
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <>
          <li>{item.name}</li>
          <li>{item.price}</li>
        </>
        
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;