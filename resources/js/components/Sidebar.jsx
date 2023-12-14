import React, { useState, useEffect } from "react";
import "../../css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyReactComponent from "./MyReactComponent";
import SubDashboard from "./SubDashboard";

import { Link } from "react-router-dom";
import {
    faHouse,
    faTruckFast,
    faList,
    faClipboard,
    faPerson,
    faMoneyCheckDollar,
    faBoxesStacked,
    faReceipt,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar(components) {
    function activeLink(e) {
        let currentElement = e.currentTarget;
        let allChild = currentElement.childNodes;
        allChild.forEach((element) => {
            element.classList.remove("actives");
            // if (e.target.parentNode.id == element.id) {
            //     element.classList.add("actives");
            //     if (element.dataset.id) {
            //         let key = element.dataset.id;
            //         switch (key) {
            //             case "ProductAdd":
            //                 components.setCurrentComponent(<ProductAdd />);
            //                 break;
            //             case "ProductCategory":
            //                 components.setCurrentComponent(<SubDashboard />);
            //                 break;
            //             case "ProductList":
            //                 components.setCurrentComponent(<ProductList />);
            //                 break;
            //             default:
            //                 break;
            //         }
            //     }
            // }
        });
    }
    function SetDashboard() {
        components.setCurrentComponent(<SubDashboard />);
        console.log("fg");
    }
    return (
        <div id="sidebar-dashboard">
            <ul className="sidebar-list-menu">
                <li className="sidebar-menu collapsed" onClick={SetDashboard}>
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to="/home" className="m-link">
                            <FontAwesomeIcon icon={faHouse} />{" "}
                            <span> Dashboard</span>
                        </Link>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="faRight"
                        />
                    </div>
                </li>
                <li className="sidebar-menu collapsed">
                    <div className="">
                        <a
                            href=""
                            className="m-link"
                            data-bs-toggle="collapse"
                            data-bs-target="#menu-product"
                        >
                            <FontAwesomeIcon icon={faTruckFast} />{" "}
                            <span>Products</span>
                        </a>
                        <ul
                            id="menu-product"
                            className="sub-menu collapse"
                            onClick={(e) => activeLink(e)}
                        >
                            <li
                                className="nab-item"
                                id="1"
                                data-id="ProductList"
                            >
                                <Link to="/product-list" className="nav-link">
                                    product list
                                </Link>
                            </li>
                            <li
                                className="nab-item"
                                id="2"
                                data-id="ProductCategory"
                            >
                                <a href="#" className="nav-link">
                                    product category
                                </a>
                            </li>
                            <li
                                className="nab-item"
                                id="3"
                                data-id="ProductAdd"
                            >
                                <Link to="product-add" className="nav-link">
                                    product add
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="sidebar-menu  collapsed">
                    <div className="">
                        <a
                            href=""
                            className="m-link"
                            data-bs-toggle="collapse"
                            data-bs-target="#menu-category"
                        >
                            <FontAwesomeIcon icon={faList} />{" "}
                            <span>Categories</span>
                        </a>
                        <ul
                            id="menu-category"
                            className="sub-menu collapse"
                            onClick={(e) => activeLink(e)}
                        >
                            <li className="nab-item" id="1">
                                <a href="#" className="nav-link">
                                    category list
                                </a>
                            </li>
                            <li className="nab-item" id="2" data-id>
                                <a href="#" className="nav-link">
                                    category edith
                                </a>
                            </li>
                            <li className="nab-item" id="3">
                                <a href="#" className="nav-link">
                                    category add
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="sidebar-menu">
                    <a
                        href=""
                        className="m-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#menu-order"
                    >
                        <FontAwesomeIcon icon={faClipboard} />
                        <span>Orders</span>
                    </a>
                    <ul
                        id="menu-order"
                        className="sub-menu collapse"
                        onClick={(e) => activeLink(e)}
                    >
                        <li className="nab-item" id="1">
                            <Link to="/refund" className="nav-link">
                                Refund
                            </Link>
                        </li>
                        <li className="nab-item" id="2" data-id>
                            <a href="#" className="nav-link">
                                category edith
                            </a>
                        </li>
                        <li className="nab-item" id="3">
                            <a href="#" className="nav-link">
                                category add
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-menu">
                    <FontAwesomeIcon icon={faPerson} />
                    <span>Customers</span>
                </li>
                <li className="sidebar-menu">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                    <span>Sales Promotion</span>
                </li>
                <li className="sidebar-menu">
                    <FontAwesomeIcon icon={faBoxesStacked} />
                    <span>Inventory</span>
                </li>
                <li className="sidebar-menu">
                    <FontAwesomeIcon icon={faReceipt} />
                    <span>Accounts</span>
                </li>
            </ul>
        </div>
    );
}
