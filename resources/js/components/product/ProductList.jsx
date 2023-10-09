import React, { useEffect, useState } from "react";
import axiosClient from "../../axios";
import "../../../css/product/ProductList.css";
import FetchProductList from "./FetchProductList";
import { Link } from "react-router-dom";

export default function ProductList() {
    const [productList, setProductList] = useState();

    return (
        <div id="product-list">
            <div className="card border-1">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="card-title">Filter</h5>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-3">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="">Status</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-3">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="">Stock</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-3">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="">Price</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend rounded-start">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                        >
                                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                            <div className="per-page d-flex">
                                <select
                                    className="form-select me-2"
                                    aria-label="Default select example"
                                >
                                    <option value="">Per Page</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                >
                                    AddProduct
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <FetchProductList />
                    </div>
                </div>
            </div>
        </div>
    );
}
