const edibleReducer = (state= [], action )=>{
    if (action.type === 'SET_EDIBLE'){
        return action.payload;
    }else{
        return state;
    }
}
export default edibleReducer;