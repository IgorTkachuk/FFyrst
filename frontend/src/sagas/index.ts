import { all } from 'redux-saga/effects';
import activationSaga from './activation';
import loginSaga from './login';

// eslint-disable-next-line
function* rootSaga() {
  yield all([loginSaga(), activationSaga()]);
}

export default rootSaga;
