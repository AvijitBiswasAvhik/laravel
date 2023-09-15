import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../css/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";

import Header from "./Header";


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
    const [showSidebar, setShowSidebar] = useState({
        display: "none",
        transiation: "5s",
    });
    const [currentComponent, setCurrentComponent] = useState();
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

    // render component dynamically

    const renderProduct = () => {
        console.log("jj");
        setCurrentComponent(<MyReactComponent />);
    };
    // sahow and hide side bar

    return (
        <Router>
            <div id="dashboard-container" className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 sidebar" style={showSidebar}>
                        <Sidebar
                            componentsFunction={renderProduct}
                            setCurrentComponent={setCurrentComponent}
                        />
                    </div>
                    <div className="col-lg-9 main-content-dashboard">
                        <div className="container">
                            <div className="row justify-content-center">
                                <Header
                                    showSidebar={showSidebar}
                                    setShowSidebar={setShowSidebar}
                                />
                            </div>
                            {currentComponent}
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}
