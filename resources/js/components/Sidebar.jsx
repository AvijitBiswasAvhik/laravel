import React, { useState, useEffect } from "react";
import "../../css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default function Sidebar() {
    function activeLink(e) {
        console.log(e.currentTarget);
        let currentElement = e.currentTarget;
        let allChild = currentElement.childNodes;
        allChild.forEach((element) => {
            element.classList.remove("actives");
            if (e.target.parentNode.id == element.id) {
                console.log(e.target.parentNode.id);
                element.classList.add("actives");
            }
        });
    }

    return (
        <div id="sidebar-dashboard">
            <ul className="sidebar-list-menu">
                <li className="sidebar-menu collapsed">
                    <div className="d-flex align-items-center justify-content-between">
                        <a href="" className="m-link">
                            <FontAwesomeIcon icon={faHouse} />{" "}
                            <span> Dashboard</span>
                        </a>
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
                            <li className="nab-item" id="1">
                                <a href="#" className="nav-link">
                                    product list
                                </a>
                            </li>
                            <li className="nab-item" id="2">
                                <a href="#" className="nav-link">
                                    product category
                                </a>
                            </li>
                            <li className="nab-item" id="3">
                                <a href="#" className="nav-link">
                                    product add
                                </a>
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
                            <li className="nab-item" id="2">
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
                    <FontAwesomeIcon icon={faClipboard} />
                    <span>Orders</span>
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
