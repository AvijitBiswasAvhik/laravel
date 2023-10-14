import React, { useState, useEffect } from "react";
import "../../../css/product/SingleProduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SingleProduct() {
    let [data, setData] = useState();
    let { id } = useParams();
    useEffect(() => {
        axios
            .get(`/single-product-get/${id}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="single-product-view">
            <div className="single-view">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        {data && (
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                className="active background-indicator"
                                aria-current="true"
                                aria-label="Slide 1"
                                style={{
                                    backgroundImage: `url(/${data.image})`,
                                }}
                            ></button>
                        )}

                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            className="background-indicator"
                            aria-current="true"
                            aria-label="Slide 2"
                            style={{
                                backgroundImage: `url("https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)")`,
                            }}
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {data && (
                                <img
                                    src={`/${data.image}`}
                                    className="d-block w-100"
                                    alt="Slide 1"
                                />
                            )}
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)"
                                className="d-block w-100"
                                alt="Slide 2"
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="single-view">
                <div className="single-product-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="single-product-title">
                                    {data && data.name}
                                </h2>
                            </div>
                            <div className="col-12">
                                <h5 className="single-product-price">
                                    ${data && data.price.price}
                                </h5>
                                <div className="divider"></div>
                            </div>
                            <div className="col-12">
                                <div className="single-product-varient">
                                    <div className="single-product-size-title">
                                        <p>size</p>
                                    </div>
                                    <ul className="single-product-sizes">
                                        <li className="single-product-size">
                                            S
                                        </li>
                                        <li className="single-product-size">
                                            M
                                        </li>
                                        <li className="single-product-size">
                                            L
                                        </li>
                                        <li className="single-product-size">
                                            XL
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="single-product-buttons">
                                    <button className="single-add-cart">
                                        ADD TO CART
                                    </button>
                                    <button className="single-buy">
                                        BUY IT NOW
                                    </button>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="single-product-description">
                                    <p>
                                        <em>{data && data.description}</em>
                                    </p>
                                    <p>{data && data.description}</p>
                                    <ul className="description-list">
                                        <li>
                                            100% Wool, Heavy 4 gauge thickness
                                        </li>
                                        <li>Handmade in Nepal.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-primary">
                                    <Link to='edit' state= {data} className="text-secondary">Edith </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
