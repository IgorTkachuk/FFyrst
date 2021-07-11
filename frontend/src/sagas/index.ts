import { all } from 'redux-saga/effects';
import loginSaga from './login';
import signUpSaga from './signUp';

// eslint-disable-next-line
function* rootSaga() {
  yield all([signUpSaga(), loginSaga()]);
}

export default rootSaga;
