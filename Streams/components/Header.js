import React from 'react';
import {Link} from 'react-router-dom';


import logo from '../download.png';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div><img src={logo} alt="logo" /><h1>Live Stream Pro</h1></div>
                <div className="nav">
                    <Link to="/" className="header">Home</Link>
                    <GoogleAuth/>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;