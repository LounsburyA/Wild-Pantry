const editReducer = (state = {}, action) => {
    if (action.type === 'CLEAR_EDIT') {
        return {};

    }else if(action.type === 'SET_EDIT'){
        return action.payload;
    }
     else if (action.type === 'SEND_ITEM') {
        return action.payload;
    } else if (action.type === 'EDIT_ONCHANGE') {
        return {
            ...state,
            [action.payload.property]: action.payload.value,
        }
    }
    return state;
}
export default editReducer;