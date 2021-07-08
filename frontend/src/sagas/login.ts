import { takeEvery, put, call } from 'redux-saga/effects';
import { UserActionCreator } from '../store/slices';
import { Http } from 'services';


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
