import { call, put, takeEvery } from 'redux-saga/effects'
import { API_FETCH_FAILED, API_FETCH_SUCCEEDED } from './actions'

function* rootSaga() {
    yield takeEvery('API_FETCH_REQUEST', handleApiRequest)
}

function* handleApiRequest(action) {
    try {
        const data = yield call(fetchData, action.payload.nameCity)

        // add id to data ---> get the day of the week
        data.id = action.payload.id;
        yield put(API_FETCH_SUCCEEDED(data))
    } catch (e) {
        yield put(API_FETCH_FAILED())
    }
}

const fetchData = (nameCity) => {
    const key = "acbae9c57a24663635f3918fd4e8f0c7"
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${nameCity ? nameCity : 'hanoi'}&units=metric&cnt=7&appid=${key}`)
        .then(res => {
            if (res.status == 200) {
                return res.json()
            } 

        })
}

export default rootSaga;