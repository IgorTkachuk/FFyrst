import { takeEvery, put, call } from 'redux-saga/effects';
import { SignUpActionCreator } from '../store/slices';
import { Http } from 'services';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* signUpUserWorker() {
  const http = new Http();
  const load = http.load.bind(http);
  try {
    const regResult: ResponseGenerator = yield call(load, '/register');
    yield put(SignUpActionCreator.regSucceed(regResult));
  } catch (e) {
    yield put(SignUpActionCreator.regFailed(e.message));
  }
}

// eslint-disable-next-line
function* signUpSaga() {
  yield takeEvery(SignUpActionCreator.reg, signUpUserWorker);
}

export default signUpSaga;
