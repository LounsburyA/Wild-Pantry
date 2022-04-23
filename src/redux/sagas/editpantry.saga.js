import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* getEditPantry(action) {


try {
    const response = yield axios.get(`/api/edible/${action.payload}`);
    yield put({ type: 'SET_PANTRY', payload: response.data[0] });
}
catch (error) {
    console.log(' GET in editpanty saga is failing', error);

}
}

function* updatePantry(action) {
    try {
        console.log('update EDIBLE action payload', action.payload);
        yield axios.put (`/api/edible/${action.payload.id}`, action.payload)
        yield put ({type: 'FETCH_EDIBLE', payload: action.payload})
    } catch (error) {
        console.log(error);
        
    }
    
}


function* editPantrySaga(){
    yield takeEvery('GET_EDIT_PANTRY', getEditPantry)
    yield takeEvery ('UPDATE_PANTRY', updatePantry)

}

export default editPantrySaga;