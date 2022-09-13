import classes from "./Input.module.css";
import CartContext from "../store/Cart-context";
import React ,{useContext ,useState} from "react";

const Input = (props) => {
  const [input,setinput]=useState()
  const ctx =useContext(CartContext)

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </div>
  );
};
export default Input;