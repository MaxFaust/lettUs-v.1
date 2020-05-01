import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* postInfo(action) {
    try {
        yield axios.post(`/api/farms`, action.payload);
        console.log('Posting data to database:', action.payload);
        yield put({type: 'FETCH_FARMS'})
    } catch (error) {
        console.log('Error with user info input:', error);
    }
};

function* fetchFarms() {
    console.log('HIT');
    try {
        const elementsResponse = yield axios.get('/api/farms');
        console.log('elementsResponse:', elementsResponse);
        yield put({ type: 'SET_FARMS', payload: elementsResponse.data });
    } catch (error) {
        console.log('error fetching elements', error);
    }
}

function* infoSaga() {
    yield takeEvery('POST_INFO', postInfo);
    yield takeLatest('FETCH_FARMS', fetchFarms);
}

export default infoSaga;