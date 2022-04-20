import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
// get all
function* getEdible() {
    try {
        const response = yield axios.get('/api/edible');
        yield put({ type: 'SET_EDIBLE', payload: response.data });
    }
    catch (error) {
        console.log('edible GET failure', error);

    }
}

// add 
function* postEdible(action) {
    try {
        yield axios.post('/api/edible', action.payload)
        yield put({ type: 'FETCH_EDIBLE' })
    } catch (error) {
        console.log(error);

    }
}

function* deleteEdible(action) {
    const id = action.payload;
    console.log('saga delete edible id:', id);
    try {
        yield axios.delete(`/api/edible/${id}`)
        yield put({ type: 'FETCH_EDIBLE' })
    } catch (error) {
        console.log('error in delete edible catch', error);

    }

}



function* edibleSaga() {
    yield takeEvery('FETCH_EDIBLE', getEdible)
    yield takeEvery('POST_EDIBLE', postEdible)
    yield takeEvery('DELETE_EDIBLE', deleteEdible)
}
export default edibleSaga;