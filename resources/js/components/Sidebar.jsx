import React from "react";
import "../../css/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faTruckFast,
    faList,
    faClipboard,
    faPerson,
    faMoneyCheckDollar,
    faBoxesStacked,
    faReceipt
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return (
        <div id="sidebar-dashboard">
            <ul className="sidebar-list-menu">
                 <li className="sidebar-menu">
                    <FontAwesomeIcon icon={faHouse} /> <span> Dashboard</span>
                </li>
                <li className="sidebar-menu">
                    <FontAwesomeIcon icon={faTruckFast} /> <span>Products</span>
                </li>
                <li className="sidebar-menu">
                    <FontAwesomeIcon icon={faList} /> <span>Categories</span>
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
