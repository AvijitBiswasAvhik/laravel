import React,{createContext, useContext, useState, useEffect, Children} from 'react'
const StateContext =  createContext({
  cart : {},
  setCart : () => {},
  menu : {},
  setMenu : ()=> {},
})

export function ContextProvider({children}) {
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState(['Home', 'Men', 'Women', 'Bags', 'Outdoor']);
  return (
    <StateContext.Provider 
    value={{
      cart,
      setCart,
      menu,
      setMenu,
    }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const  useStateContext = () => useContext(StateContext);
