import React from "react";
import { MenuList } from './MenuList';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    // const [changeBlog, setchangeBlog] = useState(true)

       const [clicked, setclicked] = useState(false);
    //mobile responsiveness
    function clickedHandler() {
        setclicked(!clicked);
    }

    const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <Link to={url} className="active">{title}</Link>
            </li>
        );
    });
    return (
        <nav>
            <div className="logo">
                Portfolio<font>Lab</font>
            </div>
            <div className="menu-icon" onClick={clickedHandler}><i className={clicked ? "fas fa-times" : "fa fa-bars"}></i></div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}
                {/* <li><Link to="about" smooth={true} duration={1000}>About</Link></li> */}
                <li><Link className="active" to="portfolio">Portfolio</Link></li>
                {/* <li><Link activeClass="active" to="course" smooth={true} duration={1000}>Courses</Link></li> */}
                {/* <li><NavLink exact to="/blog" activeClassName="active">Blog</NavLink></li> */}
            </ul>
        </nav>
    )
}

export default NavBar
