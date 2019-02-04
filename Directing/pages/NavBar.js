import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
export default class NavBar extends React.Component{
    render(){
        return(
            <div className="yes">
                <nav>
                   <p><NavLink to="/">Home</NavLink> </p>
                   <p><NavLink to="/FirstPage">FirstPage</NavLink></p>
                   <p><NavLink to="/SecondPage">SecondPage</NavLink></p>
                </nav>
            </div>
        );
    }
}