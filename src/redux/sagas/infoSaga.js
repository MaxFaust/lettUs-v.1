import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* postInfo(action) {
    try {
        yield axios.put(`/api/farms`, action.payload);
        console.log('Posting data to database:', action.payload);
    } catch (error) {
        console.log('Error with user info input:', error);
    }
};

function* fetchFarms() {
    try {
        const elementsResponse = yield axios.get('/api/farms/all');
        console.log('fetchFarms response:', elementsResponse);
        yield put({ type: 'SET_FARMS', payload: elementsResponse.data });
    } catch (error) {
        console.log('error fetching elements', error);
    }
};

//Sends delete request to template.router
function* deleteInfo() {
    console.log('HIT farms');
    try {
        const elementsResponse = yield axios.delete('/api/farms/farm');
        console.log('elementsResponse:', elementsResponse);
        // yield put({ type: 'GET_INFO', payload: elementsResponse.data });
    } catch (error) {
        console.log('error fetching elements', error);
    }
};

//Sends request to database for individual farm data
function* getInfo(action) {
    console.log(`In getFarm with id:`, action.payload);
    try {
        const elementsResponse = yield axios.get(`/api/info/${action.payload}`);
        console.log('Get user info elementRes:', elementsResponse);
        yield put({ type: 'SET_FARM_INFO', payload: elementsResponse.data})
    } catch (error) {
        console.log('error fetching elements', error);
    }
};

function* fetchAFarm(action) {
    console.log('infetchAfarm with id:', action.payload);
    try {
        const elementsResponse = yield axios.get(`/api/info/${action.payload}`);
        console.log('Get user info elementRes:', elementsResponse);
        yield put({ type: 'SET_THIS_FARM', payload: elementsResponse.data})
    } catch (error) {
        console.log('error fetching elements', error);
    }
}

function* infoSaga() {
    //POST first time user info
    yield takeEvery('PUT_INFO', postInfo);
    //GET user profile information
    yield takeEvery('GET_INFO', getInfo);
    //DELETE drop info and/or images
    yield takeEvery('DELETE_INFO', deleteInfo);
    //GET all farm data from database
    yield takeLatest('FETCH_FARMS', fetchFarms);
    //GET a specific farm form homePage
    yield takeLatest('FETCH_A_FARM', fetchAFarm);


};

export default infoSaga;