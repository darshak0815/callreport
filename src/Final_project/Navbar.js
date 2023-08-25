import React, {useReducer, useState} from 'react';
import './Template.Module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink,useLocation,useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFileAlt, faGear, faShoppingCart, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  

    
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-light ">
                <div className='container'>
                    <Link className='link' to='/'>
                    <h1 className="navbar-brand  text-white">PRODUCT ADMIN</h1></Link>
                    <button className="navbar-toggler" type="button" data-toggle={"collapse"} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto ">
                            <NavLink  className=" link nav-item " to="/Dashboard">
                                <div className='px-3 nav-link  text-white text-center'><FontAwesomeIcon icon={faTachometerAlt} /><br />Dashboard </div>
                            </NavLink>
                            <NavLink activeclassname="active" className="link nav-item" to="/Product">
                                <div className='px-3 nav-link text-white text-center'><FontAwesomeIcon icon={faShoppingCart} /><br />Products </div>
                            </NavLink>
                            <NavLink className=" link nav-item" to="/AccountPage">
                                <div className='px-3 nav-link text-white text-center'><FontAwesomeIcon icon={faUser} /><br />Accounts </div>
                            </NavLink>
                  

                        </ul>
                        <Link className='link text-white nav-link login' to="/LoginAg" >
                            Admin,<b>Logout</b>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;