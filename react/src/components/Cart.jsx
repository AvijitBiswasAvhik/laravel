import React from "react";
import "../assets/css/DefaultComponent/cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../context/ContextProvider";

export default function Cart({ cart }) {
    let { cartData } = useStateContext();
    console.log(cartData);
    return (
        <div id="cart">
            <div className="cartHandle" onClick={cart}>
                <FontAwesomeIcon icon={faX} />
            </div>
            <div className="container p-3">
                <div className="row p-2">
                    {cartData &&
                        cartData.map((el, i) => {
                            return (
                                <div className="col-12 shadow-lg p-3" key={i}>
                                    <div className="row">
                                        <div className="col-6 cart-card-item">
                                            <h6 className="">{el.name}</h6>
                                            <div className="cart-image-container">
                                                <img
                                                    src={`http://127.0.0.1:8000/${el.image}`}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col cart-price p-0">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td className="scope-1">
                                                            Unit:
                                                        </td>
                                                        <td>
                                                            $
                                                            {
                                                                el.prices
                                                                    .discount_price
                                                            }
                                                        </td>
                                                        <td>Total:</td>
                                                        <td>$20</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-12 d-flex justify-content-around">
                                            <div className="quantity">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                >
                                                    <option>1</option>
                                                    <option value="1">
                                                        One
                                                    </option>
                                                    <option value="2">
                                                        Two
                                                    </option>
                                                    <option value="3">
                                                        Three
                                                    </option>
                                                </select>
                                            </div>
                                            <button className="cart-item-delete">
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
