import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* getEditJournal(action) {

    try {
        const editJournal = yield axios.get(`/journal/${action.payload}`)
        yield put({ type: 'SET_EDIT_JOURNAL', payload: editJournal.data[0] })
    } catch (error) {
        console.log(error);
    }
}
function updateJournal(action) {
    try {
        console.log('update journal action payload', action.payload);
        yield axios.put (`/journal/${action.payload.id}`, action.payload)
        yield put ({type: 'FETCH_JOURNAL', })
    } catch (error) {
        console.log(error);
        
    }
    
}


function editSaga(){
    yield takeEvery('GET_EDIT_JOURNAL', getEditJournal)
}

export default getEditJournal;