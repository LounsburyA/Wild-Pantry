import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* getEditJournal(action) {

//     try {
//         const editJournal = yield axios.get(`/journal/${action.payload}`)
//         yield put({ type: 'GET_EDIT_JOURNAL', payload: editJournal.data[0] })
//     } catch (error) {
//         console.log(error);
//     }
// }
// need to add new get route to get 1 item
try {
    const response = yield axios.get(`/api/journal/${action.payload}`);
    yield put({ type: 'SET_EDIT', payload: response.data[0] });
}
catch (error) {
    console.log(' GET in edit saga is failing...cause it is a poop face', error);

}
}

function* updateJournal(action) {
    try {
        console.log('update journal action payload', action.payload);
        yield axios.put (`/api/journal/${action.payload.id}`, action.payload)
        yield put ({type: 'FETCH_JOURNAL', payload: action.payload})
    } catch (error) {
        console.log(error);
        
    }
    
}


function* editSaga(){
    yield takeEvery('GET_EDIT_JOURNAL', getEditJournal)
    yield takeEvery ('UPDATE_ENTRY', updateJournal)

}

export default editSaga;