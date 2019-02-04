import React from 'react';
//import CommentDetails from './CommentDetails';

const ApprovalCard = props =>{
    return(
        <div className="ui card">
                <div className="content">{props.children}</div>
                    <div className="extra content">
                        <div className="ui two cards">
                            <div className="ui card green button">Approve</div>
                            <div className="ui card red button">Decline</div>
                        </div>
                    </div>
        </div>
    );
};
export default ApprovalCard;