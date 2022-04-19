const journalReducer = (state= [], action )=>{
    if (action.type === 'SET_JOURNAL'){
        return action.payload;
    }else{
        return state;
    }
}
export default journalReducer;