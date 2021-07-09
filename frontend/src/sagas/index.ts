import { all } from 'redux-saga/effects';
import signUpSaga from './signUp';

// eslint-disable-next-line
function* rootSaga() {
  yield all([signUpSaga()]);
}

export default rootSaga;
