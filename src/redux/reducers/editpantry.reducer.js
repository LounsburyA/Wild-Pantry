const editPantryReducer = (state = {}, action) => {
    if (action.type === 'CLEAR_EDITPANTRY') {
        return {};

    } else if (action.type === 'SET_PANTRYEDIT') {
        return action.payload;
    }
    else if (action.type === 'SEND_EDIBLE') {
        return action.payload;
    } else if (action.type === 'EDIT_PANTRYCHANGE') {
        return {
            ...state,
            [action.payload.property]: action.payload.value,
        }
    }
    return state;
}
export default editPantryReducer;