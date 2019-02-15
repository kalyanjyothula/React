import {combineReducers} from 'redux';

export const songListReducer =() =>{ //list of songs 
    return [
        {title:'Undiporaadey',duration:'2:54',singer:'Sid Sriram'},
        {title:'Rowdy baby',duration:'4:30', singer:'Yuvan Shankar '},
        {title:'Entho Fun ',duration:'3:30',singer:'DSP'},
        {title:'Maate Vinaduga',duration:'2:00',singer:'Sid Sriram'},
        {title:'Na Na Na  ',duration:'3:30',singer:'Sid Sriram'},
        {title:'Pubg tone',duration:'2:00',singer:'Myself'},
        {title:'Taki taki ',duration:'3:30',singer:'DSP'},
        {title:'Rangama mangama',duration:'2:00',singer:'Sid Sriram'}
    ];

}
export const selectedSong = (selectedSong=null,action) =>{ //retuning selected song 
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }return selectedSong;
}

export default combineReducers({ // combining  
    songs:songListReducer,
    option:selectedSong
});