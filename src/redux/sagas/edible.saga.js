import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getEdible() {
    try {
        const response = yield axios.get('/api/edible');
        yield put({ type: 'SET_EDIBLE', payload: response.data });
    }
    catch (error) {
        console.log('edible GET failure', error);

    }
}
function* postEdible(action){
    try {
        yield axios.post('/api/edible', action.payload)
        yield put({type: 'FETCH_EDIBLE'})
    } catch (error) {
        console.log(error);
        
    }
}


function* edibleSaga() {
    yield takeEvery('FETCH_EDIBLE',getEdible)
    yield takeEvery('POST_EDIBLE', postEdible)
}
export default edibleSaga;