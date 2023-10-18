import React,{createContext, useContext, useState, useEffect, Children} from 'react'
const StateContext =  createContext({
  cart : {},
  setCart : () => {},
  menu : {},
  setMenu : ()=> {},
  addToCart : ()=> {},
})

export function ContextProvider({children}) {
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState(['Home', 'Men', 'Women', 'Bags', 'Outdoor']);
  let addToCart = (id) => {
    console.log(id);
  };
  return (
    <StateContext.Provider 
    value={{
      cart,
      setCart,
      menu,
      setMenu,
      addToCart
    }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const  useStateContext = () => useContext(StateContext);
