import React from "react";
import { MenuList } from './MenuList';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [changeBlog, setchangeBlog] = useState(true)

    function changeBlogState() {
        setchangeBlog(!changeBlog);
    }

    const [clicked, setclicked] = useState(false);
    //mobile responsiveness
    function clickedHandler() {
        setclicked(!clicked);
    }

    const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <NavLink to={url} activeClassName="active">{title}</NavLink>
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
                <li><Link activeClass="active" to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                <li><Link activeClass="active" to="course" smooth={true} duration={1000}>Courses</Link></li>
                {/* <li><NavLink exact to="/blog" activeClassName="active">Blog</NavLink></li> */}
            </ul>
        </nav>
    )
}

export default NavBar
