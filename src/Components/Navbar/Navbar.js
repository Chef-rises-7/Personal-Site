import React, { useState, useEffect, useRef } from 'react';
import { Link,useLocation,NavLink } from "react-router-dom";
import { arr,paths,children } from "./NavOptions.js";
import "./Navbar.css";


const Navbar = () => {
    const [counter,setCounter] = useState(0);
    const [charge,setCharge] = useState(arr[0]);
    const refGlow = useRef(counter);
    refGlow.current = counter;
    
    
    
    useEffect(() => {

        if(counter < 7) {
            refGlow.current = setTimeout(() => {
                setCounter((prev) => prev+1);
                setCharge(arr[counter]);
                return counter;
            },250);
    
            return () => {
                clearTimeout(refGlow.current);
            };
        }
    },[counter])


    return (
        <div className="Navbar">
            <div className="Navbar__name">
                <div className="Navbar__bulb">
                    {counter===7 ? arr[5] : charge}
                </div>
                <span>Harish</span>
            </div>  
            <ul className="Navbar__options">
                {paths.map( (path,index) => {
                    return <li>
                        <NavLink exact to={`/${path}`} activeClassName="Navbar__link--active" >{children[index]}</NavLink>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Navbar
