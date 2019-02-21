import React from 'react'
import contextValues from './LanguageContext';

class Field extends React.Component{

    static contextType=contextValues;
    render(){
        //console.log(this.context)
        const text = this.context === 'english'?'Name':'Naam';
        return(
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>
        );
    }
}

export default Field;