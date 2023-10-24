import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    Children,
} from "react";
import axiosClient from "../axisos";
const StateContext = createContext({
    cart: {},
    setCart: () => {},
    menu: {},
    setMenu: () => {},
    addToCart: () => {},
    styles: {},
    addToTable: () => {}
});

export function ContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [menu, setMenu] = useState([
        "Home",
        "Men",
        "Women",
        "Bags",
        "Outdoor",
    ]);
    let [buyerData, setBuyerData] = useState(null);
    let [styles, setStyles] = useState(false);
    let addToCart = (id) => {
        if (localStorage.getItem("TOKEN") == null || styles === true) {
            setStyles(!styles);
        }
        if(localStorage.getItem("TOKEN") != null) {

            axiosClient.get(`add-to-cart/${id}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
        }
        
    };
    let addToTable = (id) => {}
    return (
        <StateContext.Provider
            value={{
                cart,
                setCart,
                menu,
                setMenu,
                addToCart,
                styles,
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
