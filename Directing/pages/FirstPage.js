import React from 'react';
import NavBar from './NavBar';
export default class FirstPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Redirected To the FirstPage</h1><br/>
                <div>
                    <NavBar/>
                </div>
            </div>
        );
    }
}