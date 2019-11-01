import axios from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_BOOKS, UPDATE_BOOKS } from './actions/bookActions';

const searchUrl = 'https://www.googleapis.com/books/v1/volumes';

function *dispatchFetchBooks ({ userinput, startIndex }) {
    try {
        const { data } = yield call(axios.get, `${searchUrl}?q=${userinput}&startIndex=${startIndex}`);
        yield put({
            type: UPDATE_BOOKS,
            payload: data.items || [],
            searchTerm: userinput,
            startIndex: startIndex + 10
        });
    } catch (error) {
        // yield put error action
        console.log(error);
    }
}

function *watchFetchBooks () {
    yield takeEvery(FETCH_BOOKS, dispatchFetchBooks);
}

export default function *rootSaga () {
    yield all([
        watchFetchBooks()
    ]);
}
