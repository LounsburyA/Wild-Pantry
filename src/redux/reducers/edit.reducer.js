const editReducer = (state = {}, action) => {
    if (action.type === 'CLEAR_EDIT') {
        return {};
    } else if (action.type === 'SET_EDIT_JOURNAL') {
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