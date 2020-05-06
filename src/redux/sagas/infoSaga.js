import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* postInfo(action) {
    try {
        yield axios.post(`/api/farms`, action.payload);
        console.log('Posting data to database:', action.payload);
    } catch (error) {
        console.log('Error with user info input:', error);
    }
};

function* fetchFarms() {
    try {
        const elementsResponse = yield axios.get('/api/farms/all');
        console.log('elementsResponse:', elementsResponse);
        yield put({ type: 'SET_FARMS', payload: elementsResponse.data });
    } catch (error) {
        console.log('error fetching elements', error);
    }
};

//Sends delete request to template.router
function* deleteInfo() {
    console.log('HIT farms');
    try {
        const elementsResponse = yield axios.delete('/api/farms');
        console.log('elementsResponse:', elementsResponse);
        yield put({ type: 'SET_FARMS', payload: elementsResponse.data });
    } catch (error) {
        console.log('error fetching elements', error);
    }
};

//Sends request to database for individual farm data
function* getFarm() {
    console.log('HIT getFarm')
    try {
        const elementsResponse = yield axios.get('/api/info');
        yield put({ type: 'SET_FARMS', payload: elementsResponse.data})
    } catch (error) {
        console.log('error fetching elements', error);
    }
};

function* infoSaga() {
    yield takeEvery('POST_INFO', postInfo);
    yield takeEvery('DELETE_INFO', deleteInfo);
    yield takeLatest('FETCH_FARMS', fetchFarms);
    yield takeEvery('GET_FARM', getFarm);
};

export default infoSaga;