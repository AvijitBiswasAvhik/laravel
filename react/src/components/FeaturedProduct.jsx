import React from "react";
import "../assets/css/featuredProduct.css";
import { useStateContext } from "../context/ContextProvider";

export default function FeaturedProduct({ image }) {
    const {menu} = useStateContext();
    return (
        <>
            <h1 className="fetured-title text-center">Featured Collection</h1>
            <div className="divider"></div>
            <div className="featured-section">
                {image &&
                    image.map((el, i) => {
                        return(<div
                            className="featured-item"
                            key={i}
                            style={{
                                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${el.src})`
                              }}
                        >{menu[i]}</div>)
                    })}
            </div>
        </>
    );
}
