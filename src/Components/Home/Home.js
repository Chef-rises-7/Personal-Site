import React from 'react';
import image from "./me.png";
import "./Home.css";
import { Link } from "react-router-dom";
import {arr} from "./HomeOptions.js";

const Home = () => {
    return (
        <div className="Home__holder">
           <div className="Home__container">
                <img className="Home__image" src={image} alt="Its me harish the great"/>
                <ul className="tc">
                    {arr.map( (ele,index) => {
                        return <li>
                        <Link onMouseEnter={() => console.log("enter")} onMouseLeave={() => console.log("leave")} to={{ pathname: "https://www.instagram.com/harish_rt_007/" }}>{ele}</Link>
                        </li>
                    })}
                </ul>
           </div> 
        </div>
    )
}

export default Home;
