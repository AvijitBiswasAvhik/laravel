import React from "react";
import "../assets/css/SingleProductView.css";

export default function SingleProductView() {
    return (
        <div className="single-product-view">
            <div className="single-view">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active background-indicator"
                            aria-current="true"
                            aria-label="Slide 1"
                          
                            style={{backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/J58xmVmyyYptScQRhHFeqP-1024-80.jpg.webp")`}}
                        >
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                            className="background-indicator"
                            style={{backgroundImage: `url("https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)")`}}
                        >
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                            className="background-indicator"
                            style={{backgroundImage: `url("https://m.media-amazon.com/images/I/91XYNN3S4+L._UX569_.jpg"`}}
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                            className="background-indicator"
                            style={{backgroundImage: `url("https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)")`}}
                        >
                        </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://cdn.mos.cms.futurecdn.net/J58xmVmyyYptScQRhHFeqP-1024-80.jpg.webp"
                                className="d-block w-100"
                                alt="Slide 1"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)"
                                className="d-block w-100"
                                alt="Slide 2"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://m.media-amazon.com/images/I/91XYNN3S4+L._UX569_.jpg"
                                className="d-block w-100"
                                alt="Slide 3"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)"
                                className="d-block w-100"
                                alt="Slide 4"
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
                                    Whitney Pullover
                                </h2>
                            </div>
                            <div className="col-12">
                                <h5 className="single-product-price">$138</h5>
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
                                        <em>
                                            This is a demonstration store. You
                                            can purchase products like this from
                                            United By Blue.
                                        </em>
                                    </p>
                                    <p>
                                        Buttons are fussy. Sometimes you just
                                        want to roll out of bed, put on the pull
                                        over and get to the days work. Julie is
                                        5'8" and wearing a size small.
                                    </p>
                                    <ul className="description-list">
                                        <li>
                                            100% Wool, Heavy 4 gauge thickness
                                        </li>
                                        <li>Handmade in Nepal.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}