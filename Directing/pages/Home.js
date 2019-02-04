import React from 'react';
import NavBar from './NavBar';
import './index.css';
export default class Home extends React.Component{
    render(){
        return(
        <div>
            <h1>Welcome To Home Page</h1><br/>
            <div>
                <NavBar/>
            </div>
        </div>
        );
    }
}