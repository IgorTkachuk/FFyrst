import { all } from 'redux-saga/effects';
import loginSaga from './login';

// eslint-disable-next-line
function* rootSaga() {
  yield all([loginSaga()]);
}

export default rootSaga;
