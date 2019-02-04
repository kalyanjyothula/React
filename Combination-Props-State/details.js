import React from 'react';
import './index.css';
export default class Details extends React.Component{
       constructor(props){
               super(props);
                this.state={
                        id:this.props.oops.id,
                        Marks:this.props.oops.Marks,
                        Grade:this.props.oops.Grade,
                };
                this.Newmarks=React.createRef();
                this.NewGrade=React.createRef();
       }
        Modify = (e) =>{
                this.setState({Marks:this.Newmarks.current.value,Grade:this.NewGrade.current.value});
                let newoops={...this.state};
                this.props.Method(newoops);
        }
       render(){
            return(
                <div>
                        <p><span>Name :</span>{" "+this.state.id}</p>
                        <p><span>Marks:</span>{" "+this.state.Marks+"    "} <input type="text"    ref={this.Newmarks} onChange={ (e) => e.target.value }/></p>
                        <p><span>Grade :</span>{" "+this.state.Grade+"    "} <input type="text"   ref={this.NewGrade}  onChange={(e) => e.target.value  }/></p>
                        <button onClick={this.Modify}>Update</button>
                
                 </div>
            );
       }

       //next topic is reference ---- 
       /* in constructor(){
               this.varnam=React.createRef();
               at field : ref={this.varnam};
               using: let num=this.varnam.current.value;num++;
               this.varname.value=num;
       }
       */
}