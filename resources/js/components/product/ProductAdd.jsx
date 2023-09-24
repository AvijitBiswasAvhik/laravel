import React from "react";
import "../../../css/product/ProductAdd.css";

export default function ProductAdd() {
    return (
        <div id="product-add" className="container">
            <div className="row">
                <div className="col-lg-12 product-add">
                    <div className="container p-0">
                        <div className="row py-2">
                            <div className="col-md-5">
                                <div className="add-product-title-box">
                                    <h4>Add a new Product</h4>
                                    <h6 className="text-muted fw-normal">
                                        Add a new Product
                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-item-center flex-wrap">
                                <div className="add-product-update-box align-content-center d-flex flex-wrap gap-2 w-100 py-2">
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                    >
                                        Discard
                                    </button>
                                    <button
                                        type="button"
                                        role="button"
                                        aria-pressed="true"
                                        className="btn btn-outline-primary"
                                    >
                                        Save Draft
                                    </button>
                                    <button
                                        type="button"
                                        role="button"
                                        aria-pressed="true"
                                        className="btn btn-outline-success"
                                    >
                                        Publish Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 product-add p-2">
                    <div className="card shadow-lg mb-4 border-0">
                        <div className="card-header">
                            <h5 className="card-title mb-0">
                                Product information
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col">
                                    <label
                                        htmlFor="ecommerce-product-name"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="ecommerce-product-name"
                                        type="text"
                                        className="form-control"
                                        placeholder="Product title"
                                        name="productName"
                                        aria-label="productTitle"
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label
                                        className="form-label"
                                        htmlFor="ecommerce-product-sku"
                                    >
                                        SKU
                                    </label>
                                    <input
                                        type="number"
                                        id="ecommerce-product-sku"
                                        className="form-control"
                                        placeholder="SKU"
                                        name="productSku"
                                        aria-label="Product SKU"
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        className="form-label"
                                        htmlFor="ecommerce-product-barcode"
                                    >
                                        Barcode
                                    </label>
                                    <input
                                        type="text"
                                        id="ecommerce-product-barcode"
                                        className="form-control"
                                        placeholder="0123-456"
                                        aria-label="Product Barcode"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="product-description">
                                        Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="product-description"
                                        rows="4"
                                        name="productDescription"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 shadow-lg mb-4">
                        <div className="card-header border-0 d-flex align-items-center justify-content-between">
                            <h5 className="mb-0 card-title">Media</h5>
                            <a
                                href=""
                                className="fw-medium text-decoration-none fw-bold"
                            >
                                Add media from URL
                            </a>
                        </div>
                        <div className="card-body">
                            <form
                                action=""
                                id="dropzone-basic"
                                className="dropzone needsclick dz-clickable"
                            >
                                <div className="dz-message needsclick my-5">
                                    <p className="fs-4 note needsclick my-2 text-center">
                                        Drag and drop your image here
                                    </p>
                                    <small className="text-muted d-block fs-6 my-2 text-center">
                                        or
                                    </small>
                                    <span
                                        id="btnBrowse"
                                        className="note needsclick btn bg-label-primary"
                                    >
                                        Browse image
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card mb-4 border-0 shadow-lg">
                        <div className="card-header border-0">
                            <h5 className="card-title">Variants</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-row d-flex">
                                    <div className="col-6">
                                        <label
                                            htmlFor="product-variants"
                                            className="form-label"
                                        >
                                            Options
                                        </label>
                                        <select
                                            name="productVariants1" // Unique name for the first select
                                            id="product-variants"
                                            className="form-select w-50"
                                            aria-label="Default select example"
                                        >
                                            <option value="size">Size</option>
                                            <option value="weight">
                                                Weight
                                            </option>
                                            <option value="color">Color</option>
                                            <option value="smell">Smell</option>
                                        </select>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label
                                            htmlFor="product-variants-type"
                                            className="form-label"
                                        >
                                            Enter Your product Size
                                        </label>
                                        <select
                                            name="productVariants2" // Unique name for the second select
                                            id="product-variants-type"
                                            className="form-select w-50"
                                            aria-label="Default select example"
                                        >
                                            <option value="size">Size</option>
                                            <option value="weight">
                                                Weight
                                            </option>
                                            <option value="color">Color</option>
                                            <option value="smell">Smell</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col border border-1 border-success-subtle rounded-1 p-2">
                                        <h5 className="card-subtitle">Size</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">width</th>
                                                    <td>3"</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Height</th>
                                                    <td>6"</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 product-add">
                    <div className="card mb-4 border-0 shadow-lg">
                        <div className="card-header border-0">
                            <h5 className="card-=title">Pricing</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label
                                    htmlFor="product-price"
                                    className="form-label"
                                >
                                    Base Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="product-price"
                                    placeholder="Price"
                                />
                                <label
                                    htmlFor="product-discount-price"
                                    className="form-label"
                                >
                                    Discounted Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="product-discount-price"
                                    placeholder="Discounted Price"
                                />
                                <input
                                    type="checkbox"
                                    className="form-check-input border border-2 border-secondary"
                                    id="price-charge-tax"
                                />
                                <label
                                    htmlFor="price-charge-tax"
                                    className="form-label mx-2"
                                >
                                    Charge tax on this product{" "}
                                </label>
                                <div className="border-top pt-3 ">
                                    <div className="custom-control custom-switch d-flex align-items-center justify-content-between">
                                       <span className="mb-0 h6">In stock</span>
                                       <div className="custom-toggle-switch" id="custom-toggle-switch"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
