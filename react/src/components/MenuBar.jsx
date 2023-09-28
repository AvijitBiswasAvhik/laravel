import React from 'react'
import '../assets/css/DefaultComponent/menuBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


export default function MenuBar({menu, sideBar}) {
  return (
    <div className="menuBar">
        
        <ul className="menuBarLi">
            {menu && menu.map((el, i)=>{
                return (
                    <li key={i} className='sideBarMenue'><Link to={`product/${el}`}>{el}</Link>
                    </li>
                    
                )
            })}
        </ul>
        <div className="menuHide" onClick={sideBar}>
        <FontAwesomeIcon icon={faX} />
        </div>
    </div>
  )
}
