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
function* edibleSaga() {
    yield takeEvery('FETCH_EDIBLE',getEdible)
}
export default edibleSaga;