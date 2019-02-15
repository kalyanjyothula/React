export const songSelected = (song) =>{
    return{
        type:'SONG_SELECTED',
        payload:song
    };
};