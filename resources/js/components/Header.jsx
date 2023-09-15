import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars,faCircleInfo,faFlagUsa,faBell } from "@fortawesome/free-solid-svg-icons";

export default function Header({showSidebar, setShowSidebar}) {
    useEffect(() => {
        
        window.addEventListener("resize", (e) => {
            if (window.innerWidth >= 980) {
                setShowSidebar({ ...showSidebar, display: "block" });
            } else if (window.innerWidth <= 979) {
                setShowSidebar({ ...showSidebar, display: "none" });
            }
        });
    }, []);
    function showHide(e) {
        let sidebar = document.querySelector(".sidebar");
        console.log("h");
        if (showSidebar.display == "none") {
            setShowSidebar({ display: "block" });
        } else if (showSidebar.display == "block") {
            setShowSidebar({ display: "none" });
        }
    }
    return (
        <>
            <div className="col-md-4 dashboard-col header">
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
                    onClick={(e) => {
                        showHide(e);
                    }}
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </>
    );
}
