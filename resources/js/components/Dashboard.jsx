import React, { useState, useEffect } from "react";
import "../../css/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
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

export default function Dashboard() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [element, setElement] = useState();
    useEffect(() => {
        setElement(document.querySelectorAll(".middle-man-co"));
    }, []);
    if (element) {
        let color = ["#D1E7DD", "#F8D7DA", "#FFF3CD", "#CFF4FC"];
        element.forEach((element, i) => {
            element.style.backgroundColor = color[i];
        });
    }

    // sahow and hide side bar
    function showHide(e) {
        setShowSidebar(!showSidebar);
        console.log("hello");
    }
    useEffect(() => {
        let sidebar = document.querySelector(".sidebar");
        if (showSidebar == true) {
            
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
        window.addEventListener("resize", (e) => {
            if(window.innerWidth >= 980){
                sidebar.style = {
                    display: "block",
                    transition: ".5s"
            };
            }else if(window.innerWidth <= 979){
                sidebar.style.display = "none";
            }
        });
        
    }, [showSidebar]);

    return (
        <div id="dashboard-container" className="container">
            <div className="row justify-content-center">
                <div className="col-lg-3 sidebar">
                    <Sidebar />
                </div>
                <div className="col-lg-9 main-content-dashboard">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 dashboard-col">
                                <input
                                    type="search"
                                    name="search"
                                    id="dashboard-search"
                                    placeholder="Search..."
                                />
                                <button className="dashboard-search-btn">
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="dashboard-search-btn-icon"
                                    />
                                </button>
                            </div>
                            <div className="col-md-8 dashboard-col">
                                <ul className="admin-profile-menu">
                                    <li className="admin-menu">
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            className="admin-menu-icon"
                                        />
                                    </li>
                                    <li className="admin-menu">
                                        <FontAwesomeIcon
                                            icon={faFlagUsa}
                                            className="admin-menu-icon"
                                        />
                                    </li>
                                    <li className="admin-menu">
                                        <FontAwesomeIcon
                                            className="admin-menu-icon"
                                            icon={faBell}
                                            beatFade
                                        />
                                    </li>
                                    <li className="admin-menu">
                                        <div className="profile-container">
                                            <div className="profile-image-name">
                                                <h5>Avijit Biswas</h5>
                                                <p>Admin Profile</p>
                                            </div>
                                            <div className="profile-image-container">
                                                <img src="lion.jpg" alt="" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div
                                    className="dashboard-menu-toggle"
                                    onClick={(e) => showHide(e)}
                                >
                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                            </div>
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
                                    <input
                                        type="date"
                                        className="form-control"
                                    />
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
                                        <div className="left-info">
                                            Customer
                                        </div>
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
                                            <FontAwesomeIcon
                                                icon={faCartShopping}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 p-2">
                                <div className="card">
                                    <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="left-info">
                                            Avg Item Sale
                                        </div>
                                        <div className="right-icon">
                                            <FontAwesomeIcon icon={faPerson} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 p-2">
                                <div className="card">
                                    <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="left-info">
                                            Customer
                                        </div>
                                        <div className="right-icon">
                                            <FontAwesomeIcon icon={faPerson} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 p-2">
                                <div className="card">
                                    <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="left-info">
                                            Customer
                                        </div>
                                        <div className="right-icon">
                                            <FontAwesomeIcon icon={faPerson} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 p-2">
                                <div className="card">
                                    <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="left-info">
                                            Customer
                                        </div>
                                        <div className="right-icon">
                                            <FontAwesomeIcon icon={faPerson} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 p-2">
                                <div className="card">
                                    <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="left-info">
                                            Customer
                                        </div>
                                        <div className="right-icon">
                                            <FontAwesomeIcon icon={faPerson} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 p-2">
                                <div className="card">
                                    <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="left-info">
                                            Customer
                                        </div>
                                        <div className="right-icon">
                                            <FontAwesomeIcon icon={faPerson} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 p-2">
                                <div className="card">
                                    <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="left-info">
                                            Customer
                                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
