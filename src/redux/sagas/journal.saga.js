import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getJournal() {
    try {
        const response = yield axios.get('/api/journal');
        yield put({ type: 'SET_JOURNAL', payload: response.data });
    }
    catch (error) {
        console.log(' journal GET failure', error);

    }
}
function* postJournal(action){
    try {
        yield axios.post('/api/journal', action.payload)
        yield put({type: 'FETCH_JOURNAL'})
    } catch (error) {
        console.log(error);
        
    }
}


function* journalSaga() {
    yield takeEvery('FETCH_JOURNAL',getJournal)
    yield takeEvery('POST_JOURNAL', postJournal)
}
export default journalSaga;