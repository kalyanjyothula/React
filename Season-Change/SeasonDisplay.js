import React from 'react';
import './SeasonDisplay.css';
const getSeason = (lat,month) =>{
    if(month>2 && month < 9){
        return lat > 0 ?'summer':'winter';
    }else{
        return lat > 0 ?'winter':'summer';
    }
};
const SeasonDisplay = (props) =>{
    const seasonVariable = getSeason(props.lat,new Date().getMonth());
    const seasonConfig ={
        summer:{
            text: "Let's hit the beach",
            iconName : 'sun'
        },
        winter :{
            text : "Burn it chilly",
            iconName : 'snowflake'
        }
    };
    const {text,iconName} = seasonConfig[seasonVariable];
    return(
        <div className ={`season-display ${seasonVariable}`}>
            <i className ={`rightend massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className ={`leftend massive ${iconName} icon`} />
        </div>
    );
};
export default SeasonDisplay;