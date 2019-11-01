import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

const searchUrl = 'https://www.googleapis.com/books/v1/volumes';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const UPDATE_BOOKS = 'UPDATE_BOOKS';

export const fetchBooks = (userinput, startIndex) => ({
    type: FETCH_BOOKS,
    // dispatch loading or other stuff
    userinput,
    startIndex
});

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

export default function *watchFetchBooks () {
    yield takeEvery(FETCH_BOOKS, dispatchFetchBooks);
}
