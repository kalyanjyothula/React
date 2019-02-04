import React from 'react';
import NavBar from './NavBar';

export default class SecondPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Redirected To the SecondPage</h1><br/>
                <div>
                    <NavBar/>
                </div>
            </div>
        );
    }
}