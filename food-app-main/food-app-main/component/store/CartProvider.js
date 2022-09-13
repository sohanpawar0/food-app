import React ,{ useContext ,useState} from 'react'
import Cartcontext from './Cart-context'

const CartProvider = (props) => {

const [addeditem,setupdateditem] =useState([])

const ctx=useContext(Cartcontext)

  const additemhandler = (item) =>{
    setupdateditem([...addeditem,item])
  }

  const removeitemhandler= id =>{}

  const cardcontext = {
    items:addeditem,
    totalamount:0,
    additem:additemhandler,
    removeitem:removeitemhandler,
    massage:"1st victory"

  }

  return (
    <Cartcontext.Provider value={cardcontext}>
        {props.children}
    </Cartcontext.Provider>

  )
}

export default CartProvider;