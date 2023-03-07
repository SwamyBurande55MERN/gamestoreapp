import React from 'react'
import { useContext } from 'react';
import "./header.css";
import {Link} from "react-router-dom"; 

import { cartContext } from '../context/Context';

const Header = () => {
  const {cartData} = useContext(cartContext);
  
  return (
    <>
      <nav className="navBar" >
            <section className="logo" >
                <b> GameStore-App </b>
            </section>
            <section >
                  <span >{cartData.length}</span>
                 <Link to="/cart"> <i className="fa fa-shopping-cart" ></i></Link>
            </section>
      </nav>
    </>
  )
}

export default Header;
