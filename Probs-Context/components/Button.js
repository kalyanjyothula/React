import React from 'react';
import contextValues from './LanguageContext';
import colorContext from './ColorContext';

class Button extends React.Component{

    //static contextType = contextValues;

    rendertextvalue(value){
        return value==='english'?'Submit':'complete';
    }

    render(){
        //console.log(this.context);
        return(
            <colorContext.Consumer>
               {(color) =>
                 <button className={`ui button ${color}`}>
                    <contextValues.Consumer>
                        {value =>this.rendertextvalue(value)}
                    </contextValues.Consumer>
                </button>
               }
            </colorContext.Consumer>
        );
    }
}

export default Button;