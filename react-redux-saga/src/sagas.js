import { all } from 'redux-saga/effects';
import watchFetchBooks from './actions/bookActions';

export default function *rootSaga () {
    yield all([
        watchFetchBooks()
    ]);
}
