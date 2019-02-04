import React from 'react';
import ReactDOM from 'react-dom';
//import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App=() =>{
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails author="Kalyan" time="10:00 Am" comment="Rocking"/>
            </ApprovalCard>
           <ApprovalCard>
               <CommentDetails author="Venkat" time="12:00 AM" comment="Nice Bro"/>
            </ApprovalCard> 
           <ApprovalCard>
               <CommentDetails author="Durga"time="2:00 PM" comment="Have It"/>
            </ApprovalCard> 
        </div>
    );
};
ReactDOM.render(<App/>,document.querySelector('#root'));