import React, { useState, useEffect } from "react";
import {
    useNavigate,
    Navigate,
    useParams,
    useLocation,
} from "react-router-dom";
import axios from "axios";
import "../../../css/product/ProductAdd.css";

export default function ProductAdd(props) {
    let [buttonToggle, setButtonToggle] = useState(true);
    let [details, setDetails] = useState();
    let [price, setPrice] = useState();
    let [formData, setFormData] = useState({
        name: "",
        sku: "",
        barcode: "",
        description: "",
        image: "",
        details: {
            weight: "",
            size: "",
            color: "",
            smell: "",
        },
        price: { price: 0, discount_price: 0, tax: false, stock: true },
        category: "",
        status: "",
    });
    let [handleError, setHandleError] = useState({});
    let navigate = useNavigate();
    let { id } = useParams();
    let { state } = useLocation();

    let buttonOn = {
        butttonToggle: { translate: "100%", transition: ".5s" },
        butttonSwitch: { backgroundColor: "#450BA5", transition: ".5s" },
    };
    let buttonOff = {
        buttonToggle: { translate: "0", transition: ".5s" },
        butttonSwitch: { backgroundColor: "grey", transition: ".5s" },
    };
    function setButtonToggleFunc() {
        setButtonToggle(!buttonToggle);
    }
    ///// FORM HANDLE //////
    ////////////////////////
    let imageUploaded = (e) => {
        let imageShow = document.querySelector(".product-image-show");
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFormData({
                    ...formData,
                    image: e.target.result,
                }); // Corrected typo here
            };
            reader.readAsDataURL(file);
        }
    };
    /// handle stock or not
    useEffect(() => {
        setFormData({
            ...formData,
            price: { ...formData.price, stock: buttonToggle },
        });
    }, [buttonToggle]);

    ////END FORM HANDLE ///
    ///////////////////////
    //// send data to server ///
    const postData = () => {
        axios
            .post(
                `http://127.0.0.1:8000/api/product/${
                    formData.id ? "update" : "create"
                }`,
                formData
            )
            .then((response) => {
                // Handle a successful response here if needed
                setHandleError({});
                
                navigate("/home");
            })
            .catch((error) => {
                // Handle errors here

                let errors = error.response.data.errors;

                // Log the errors to the console for debugging

                // Create an error object to store the error messages
                let errorObj = {};

                // Loop through the errors and store them in the error object
                for (let key in errors) {
                    errorObj[key] = errors[key][0];
                }
                let data = errorObj.price ? JSON.parse(errorObj.price) : "";
                errorObj = { ...errorObj, price: { ...data } };
                // Update your state with the error object
                setHandleError(errorObj);
            });
    };
    // console.log(handleError);
    useEffect(() => {
        if (state) {
            setFormData({
                ...state,
                sku: state.sku == null ? "" : state.sku,
                price: {
                    ...state.price,
                    tax: state.tax == 0 ? false : true,
                    stock: state.stock == 0 ? false : true,
                },
            });
        }
    }, []);
    console.log(formData);
    //edit product section//
    ///////////////////////
    //console.log(handleError);
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
                                        onClick={postData}
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
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            });
                                        }}
                                    />
                                    {handleError.name && (
                                        <small
                                            id="emailHelp"
                                            className="form-text text-danger"
                                        >
                                            {handleError.name}
                                        </small>
                                    )}
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
                                        value={formData.sku}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                sku: e.target.value,
                                            });
                                        }}
                                    />
                                    {handleError.sku && (
                                        <small
                                            id="emailHelp"
                                            className="form-text text-danger"
                                        >
                                            {handleError.sku}
                                        </small>
                                    )}
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
                                        value={formData.barcode}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                barcode: e.target.value,
                                            });
                                        }}
                                    />
                                    {handleError.barcode && (
                                        <small
                                            id="emailHelp"
                                            className="form-text text-danger"
                                        >
                                            {handleError.barcode}
                                        </small>
                                    )}
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
                                        value={formData.description}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                description: e.target.value,
                                            });
                                        }}
                                    ></textarea>
                                    {handleError.description && (
                                        <small
                                            id="emailHelp"
                                            className="form-text text-danger"
                                        >
                                            {handleError.description}
                                        </small>
                                    )}
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
                            <div className="mb-3">
                                <label
                                    htmlFor="productImage"
                                    className="form-label"
                                >
                                    Small file input example
                                </label>
                                <input
                                    className="form-control form-control-sm"
                                    id="productImage"
                                    type="file"
                                    onChange={(e) => {
                                        imageUploaded(e);
                                    }}
                                />
                                {handleError.image && (
                                    <small
                                        id="emailHelp"
                                        className="form-text text-danger"
                                    >
                                        {handleError.image}
                                    </small>
                                )}
                                <div className="product-image-container mt-4">
                                    {formData.image && (
                                        <img
                                            src={
                                                formData.image.length > 50
                                                    ? formData.image
                                                    : "/" + formData.image
                                            }
                                            alt=""
                                            className="product-image-show"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4 border-0 shadow-lg">
                        <div className="card-header border-0">
                            <h5 className="card-title">Variants</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-row d-flex mb-4">
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
                                            onChange={(e) => {
                                                console.log(e.target.value);
                                                let key = e.target.value;
                                                setDetails({ [key]: "" });
                                                //setFormData({...formData,details:{...formData.details, [key]: "" }});
                                            }}
                                        >
                                            <option value="size">Size</option>
                                            <option value="weight">
                                                Weight
                                            </option>
                                            <option value="color">Color</option>
                                            <option value="smell">Smell</option>
                                        </select>
                                        {handleError.size && (
                                            <small
                                                id="emailHelp"
                                                className="form-text text-danger"
                                            >
                                                {handleError.size}
                                            </small>
                                        )}
                                    </div>
                                    <div className="col-6">
                                        {details && (
                                            <>
                                                <label
                                                    htmlFor="product-variants-type"
                                                    className="form-label"
                                                >
                                                    Enter Your product{" "}
                                                    {Object.keys(details)}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name={Object.keys(details)}
                                                    placeholder={Object.keys(
                                                        details
                                                    )}
                                                    value={
                                                        formData.details[
                                                            Object.keys(details)
                                                        ]
                                                    }
                                                    onChange={(e) => {
                                                        let key = e.target.name;
                                                        console.log(key);
                                                        setFormData({
                                                            ...formData,
                                                            details: {
                                                                ...formData.details,
                                                                [key]: e.target
                                                                    .value,
                                                            },
                                                        });
                                                    }}
                                                />
                                            </>
                                        )}
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
                                    name="basePrice"
                                    value={formData.price.price}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            price: {
                                                ...formData.price,
                                                price: e.target.value,
                                            },
                                        });
                                    }}
                                />
                                {handleError.price && (
                                    <>
                                        <small
                                            id="emailHelp"
                                            className="form-text text-danger"
                                        >
                                            {handleError.price.price}
                                        </small>
                                        <br />
                                    </>
                                )}
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
                                    name="discount_price"
                                    value={formData.price.discount_price}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            price: {
                                                ...formData.price,
                                                discount_price: e.target.value,
                                            },
                                        });
                                    }}
                                />
                                {handleError.price && (
                                    <>
                                        <small
                                            id="emailHelp"
                                            className="form-text text-danger"
                                        >
                                            {handleError.price.discount_price}
                                        </small>
                                        <br />
                                    </>
                                )}
                                <input
                                    type="checkbox"
                                    className="form-check-input border border-2 border-secondary"
                                    id="price-charge-tax"
                                    name="tax"
                                    value={formData.price.tax}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            price: {
                                                ...formData.price,
                                                tax: !formData.price.tax,
                                            },
                                        });
                                    }}
                                />
                                <label
                                    htmlFor="price-charge-tax"
                                    className="form-label mx-2"
                                >
                                    Charge tax on this product{" "}
                                </label>
                                <div className="border-top pt-3 ">
                                    <div className="custom-control custom-switch d-flex align-items-center justify-content-between">
                                        <span className="mb-0 h6">
                                            In stock
                                        </span>
                                        <div
                                            className="custom-toggle-switch"
                                            id="custom-toggle-switch"
                                            style={
                                                buttonToggle
                                                    ? buttonOn.butttonSwitch
                                                    : buttonOff.butttonSwitch
                                            }
                                        >
                                            <div
                                                onClick={setButtonToggleFunc}
                                                id="custom-toggle-switch-button"
                                                style={
                                                    buttonToggle
                                                        ? buttonOn.butttonToggle
                                                        : buttonOff.buttonToggle
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4 border-0 shadow-lg">
                        <div className="card-header border-0">
                            <h5 className="card-title">Organize</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label
                                    htmlFor="product-category"
                                    className="form-label"
                                >
                                    Category
                                </label>
                                <select
                                    className="form-control"
                                    id="product-category"
                                    value={formData.category}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            category: e.target.value,
                                        });
                                    }}
                                >
                                    <option>electronix</option>
                                    <option>men</option>
                                    <option>women</option>
                                </select>
                                {handleError.category && (
                                    <>
                                        <small
                                            id="emailHelp"
                                            className="form-text text-danger"
                                        >
                                            {handleError.category}
                                        </small>
                                        <br />
                                    </>
                                )}

                                <label
                                    htmlFor="product-status"
                                    className="form-label"
                                >
                                    Status
                                </label>
                                <select
                                    className="form-control"
                                    id="product-status"
                                    value={formData.status}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            status: e.target.value,
                                        });
                                    }}
                                >
                                    <option>Published</option>
                                    <option>scheduled</option>
                                    <option>inactive</option>
                                </select>
                                {handleError.status && (
                                    <>
                                        <small
                                            id="emailHelp"
                                            className="form-text text-danger"
                                        >
                                            {handleError.status}
                                        </small>
                                        <br />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
