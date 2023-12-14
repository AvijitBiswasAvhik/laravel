import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActiveUser from "./ActiveUser";
import {
    faSearch,
    faBars,
    faCircleInfo,
    faFlagUsa,
    faBell,
    faSackDollar,
    faCalculator,
    faFaceSmile,
    faShop,
    faFilter,
    faPerson,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import axiosClient from "../axios";

export default function SubDashboard() {
    let [email, setEmail] = useState({email:''});
    let verifyEmail = (e) => {
        e.preventDefault();
        console.log(email);
        axiosClient
            .post("verify-email", email)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <>
            <div className="row justify-content-center">
                <form>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email.email}
                            onChange={(e) => {
                                setEmail({ ...email, email: e.target.value });
                            }}
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                        <button
                            type="submit"
                            onClick={(e) => {
                                verifyEmail(e);
                            }}
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="row justify-content-center revenue-expense">
                <div className="col-lg-3 col-sm-6 middle-man">
                    <div className="middle-man-co">
                        <FontAwesomeIcon
                            className="middle-man-icon"
                            icon={faSackDollar}
                        />
                        <div className="middle-man-content">
                            <h5>Revenue</h5>
                            <p>$59B</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 middle-man">
                    <div className="middle-man-co">
                        <FontAwesomeIcon
                            className="middle-man-icon"
                            icon={faCalculator}
                        />
                        <div className="middle-man-content">
                            <h5>Expense</h5>
                            <p>$22B</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 middle-man">
                    <div className="middle-man-co">
                        <FontAwesomeIcon
                            className="middle-man-icon"
                            icon={faFaceSmile}
                        />
                        <div className="middle-man-content">
                            <h5>Happy Cient</h5>
                            <p>1.3B</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 middle-man">
                    <div className="middle-man-co">
                        <FontAwesomeIcon
                            className="middle-man-icon"
                            icon={faShop}
                        />
                        <div className="middle-man-content">
                            <h5>New Store Open</h5>
                            <p>2M</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pt-3">
                <div className="col-sm-6 ">
                    <div className="tab-filter dashboard-date-category d-flex align-items-center justify-content-between mb-3 flex-wrap">
                        <ul className="nav nav-tabs dashboard-date-category-ul tab-card tab-body-header rounded  d-inline-flex w-sm-100">
                            <li className="nab-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                >
                                    Today
                                </a>
                            </li>
                            <li className="nab-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                >
                                    Week
                                </a>
                            </li>
                            <li className="nab-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                >
                                    Month
                                </a>
                            </li>
                            <li className="nab-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                >
                                    Year
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 ">
                    <div className="dashboard-date-filter input-group">
                        <input type="date" className="form-control" />
                        <button className="btn btn-primary">
                            <FontAwesomeIcon icon={faFilter} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-6 col-md-4 p-2">
                    <div className="card">
                        <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">Customer</div>
                            <div className="right-icon">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                    <div className="card">
                        <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">Order</div>
                            <div className="right-icon">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                    <div className="card">
                        <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">Avg Item Sale</div>
                            <div className="right-icon">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                    <div className="card">
                        <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">Customer</div>
                            <div className="right-icon">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                    <div className="card">
                        <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">Customer</div>
                            <div className="right-icon">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                    <div className="card">
                        <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">Customer</div>
                            <div className="right-icon">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                    <div className="card">
                        <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">Customer</div>
                            <div className="right-icon">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                    <div className="card">
                        <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">Customer</div>
                            <div className="right-icon">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                    <div className="card">
                        <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">Customer</div>
                            <div className="right-icon">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row active-user-section">
                <ActiveUser />
            </div>
        </>
    );
}
