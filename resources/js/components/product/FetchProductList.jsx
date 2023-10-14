import React, { useState, useEffect } from "react";
import axiosClient from "../../axios";
import "../../../css/product/FetchProductList.css";
import { Link } from "react-router-dom";
export default function FetchProductList() {
    let [listProduct, setListProduct] = useState();
    useEffect(() => {
        axiosClient
            .get("/products")
            .then((response) => {
                setListProduct(response.data);
                console.log(response.data.meta.links);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);
    let fetchProduct = (e) => {
        console.log(e.target.dataset.id);
        let link = e.target.dataset.id;
        if (link != null) {
            axiosClient
                .get(link)
                .then((response) => {
                    setListProduct(response.data);
                    console.log(response.data.meta.links);
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        }
    };
    // console.log(listProduct);
    return (
        <>
            <table className="table">
                <thead className="text-center">
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>
                            <input
                                type="checkbox"
                                data="select-all-product"
                                className="form-ceckbox select-all-product"
                            />
                        </th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {listProduct &&
                        listProduct.data.map((product, i) => {
                            return (
                                <tr key={product.barcode}>
                                    <td>
                                        <div className="row">
                                            <div className="col-sm-4 product-list-image-container">
                                                <Link
                                                    to={`/single-product/${product.id}`}
                                                >
                                                    {" "}
                                                    <img
                                                        src={product.image}
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <div className="col-sm-8 text-start">
                                                <h6 className="product-list-title text-capitalize">
                                                    {product.name}
                                                </h6>
                                                <p className="text-muted ">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.category}</td>
                                    <td>{product.status}</td>
                                    <td>
                                        {product.price.stock == 1
                                            ? "True"
                                            : "False"}
                                    </td>
                                    <td>{product.price.price}</td>
                                    <td className="">
                                        <div className="d-flex gap-2">
                                            <button
                                                type="buuton"
                                                className="btn border border-1 p-0"
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
                                            <button
                                                type="buuton"
                                                className="btn border border-1  p-0"
                                            >
                                                <img
                                                    width="25"
                                                    height="25"
                                                    src="https://img.icons8.com/ios-glyphs/30/add--v1.png"
                                                    alt="add--v1"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            className=""
                                            data={product.id}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    <tr></tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {listProduct &&
                        listProduct.meta.links.map((product) => {
                            return (
                                <li className="page-item" key={product.label}>
                                    <p
                                        className={`page-link ${product.active && 'active'}`}
                                        href="#"
                                        onClick={(e) => {
                                            fetchProduct(e);
                                        }}
                                        data-id={product.url}
                                        style={{
                                            cursor: "pointer",
                                            hover: "grey",
                                        }}
                                    >
                                        {/*product.label*/}
                                        {product.label.replace('&laquo; Previous', '<').replace('Next &raquo;', '>')}
                                    </p>
                                </li>
                            );
                        })}
                </ul>
            </nav>
        </>
    );
}
