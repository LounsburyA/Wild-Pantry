const editPantry = (state = {}, action) => {
    if (action.type === 'CLEAR_PANTRY') {
        return {};

    } else if (action.type === 'SET_PANTRY') {
        return action.payload;
    }
    else if (action.type === 'SEND_EDIBLE') {
        return action.payload;
    } else if (action.type === 'EDIT_PANTRY') {
        return {
            ...state,
            [action.payload.property]: action.payload.value,
        }
    }
    return state;
}
export default editPantry;