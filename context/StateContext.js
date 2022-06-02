import React, {createContext, useContext, useState, useEffect} from 'react'
import { toast } from 'react-hot-toast';


//hooks
const Context = createContext();

//in our context we'll have a lot of states
//including local storage so the user's data can be saved 
export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);
//update quantity using a previous state and callback function
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    }
  return (
      <Context.Provider
          value={{
              showCart,
              cartItems,
              totalPrice,
              totalQuantities,
              qty,
              incQty,
              decQty,
        }}
      >
        {children}  
    </Context.Provider>
  )
}

//create a new function to export all props and data more easily
export const useStateContex = () => useContext(Context);
