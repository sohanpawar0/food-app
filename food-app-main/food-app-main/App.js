import React, { Fragment, useState } from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meal";
import Cart from './component/Cart/Cart';
import CartProvider from '../src/component/store/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
} 
export default App;