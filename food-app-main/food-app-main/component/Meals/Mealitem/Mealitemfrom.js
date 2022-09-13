import React ,{useContext ,useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../store/Cart-context";


const MealItemForm = (props) => {
  const ctx =useContext(CartContext)

 
  const onsubmit =(e)=>{
    e.preventDefault();
    ctx.additem(props.items)
  }
  return (
    <form className={classes.form} onSubmit={onsubmit} id={props.id} >
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          
        }}
      />
      <button >+ Add</button>
    </form>
  );
};

export default MealItemForm;