import React from 'react';
import {reduxForm,Field} from 'redux-form';

class StreamForm extends React.Component{

    renderError({error , touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
            );
        }
    }

    renderInput = ({input,label , meta}) => {
       // console.log(meta);
       const className =`field ${meta.touched && meta.error? 'error':''}`
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                <div>{this.renderError(meta)}</div>
            </div>    
            
        );
    }

    onSubmit = (formvalues) =>{
        this.props.onSubmit(formvalues);
        
    }

    render(){
        return(
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter the Title" />
                <Field name="description" component={this.renderInput} label="Enter the description" />
                <button className="ui button green">Submit</button>
            </form>          
        );
    }
}

const validate = formValues =>{
    const error ={};
    if(!formValues.title){
        error.title='You must enter title';
    }
    if(!formValues.description){
        error.description='You must enter description';
    }
    return error;
}

export default reduxForm(
    {form: 'StreamForm',
    validate
 }
 )(StreamForm);
