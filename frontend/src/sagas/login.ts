import { takeEvery, put, call } from 'redux-saga/effects';
import { UserActionCreator } from '../store/slices';
import { PayloadAction } from '@reduxjs/toolkit';
import { Http } from 'services';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

// function* signUpUser(data: PayloadAction) {
//   try {
//     yield put(UserActionCreator.requestStart());
//     const authResult = yield call(
//       apiService.httpRequest,
//       '/auth/register',
//       'POST',
//       data.payload,
//     );
//     yield put(UserActionCreator.signUpSucceed(authResult.tokens));
//   } catch (e) {
//     yield put(UserActionCreator.requestFailed(String(e)));
//   }
// }

function* loginUser() {
  const http = new Http();
  const load = http.load.bind(http);
  try {
    const authResult = yield call(load, '/');
    yield put(UserActionCreator.loginSucceed(authResult));
  } catch (e) {
    yield put(UserActionCreator.loginFailed(e.message));
  }
}

// eslint-disable-next-line
function* loginSaga() {
  yield takeEvery(UserActionCreator.login, loginUser);
}

export default loginSaga;
