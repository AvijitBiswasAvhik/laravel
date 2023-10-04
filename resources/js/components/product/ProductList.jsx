import React, { useEffect, useState } from "react";
import axiosClient from "../../axios";
import "../../../css/product/ProductList.css";

export default function ProductList() {
    const [productList, setProductList] = useState();
    useEffect(() => {
        axiosClient.get("/products").then((response) => {
            setProductList(response.data);
        });
    }, []);

    console.log(productList);
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
                                <option selected>Open this select menu</option>
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
                                <option selected>Open this select menu</option>
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
                                <option selected>Open this select menu</option>
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
                                    <option selected>
                                        Open this select menu
                                    </option>
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
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Stock</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>
                                        Select{" "}
                                        <input
                                            type="checkbox"
                                            data="select-all-product"
                                            className="form-ceckbox select-all-product"
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td>Avijit</td>
                                    <td>men</td>
                                    <td>Shedule</td>
                                    <td>true</td>
                                    <td>456</td>
                                    <td>
                                        <button
                                            type="button"
                                            class="btn"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 30 30"
                                            >
                                                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                                            </svg>
                                        </button>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
