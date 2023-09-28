import React from 'react'
import '../assets/css/DefaultComponent/cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Cart({cart}) {
  return (
    <div id='cart'><div className="item">
        <div className="cartHandle" onClick={cart}>
        <FontAwesomeIcon icon={faX} />
        </div>
    <ul>
        <li>shirt</li>
        <li>pant</li>
    </ul>
    </div>
    </div>
  )
}
