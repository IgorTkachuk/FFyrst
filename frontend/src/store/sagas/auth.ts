import { takeEvery, put, call } from 'redux-saga/effects';
import { UserActionCreator } from '../slices';
import ApiService from '../../services/api/api.service';
import { AuthSagasTypes } from '../../common/enums';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaAction } from '../../common/types';


const apiService = new ApiService();


function* loginUser(data: PayloadAction) {
  try {
    yield put(UserActionCreator.requestStart());
    const authResult = yield call(apiService.httpRequest, '/auth/login', 'POST', data.payload);
    yield put(UserActionCreator.loginSucceed(authResult.tokens));
  } catch (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* resetPassword(data: PayloadAction) {
  try {
    yield put(UserActionCreator.requestStart());
    const confirm = yield call(apiService.httpRequest, '/auth/reset', 'POST', data.payload);
    yield put(UserActionCreator.resetSucceed(confirm.message));
  } catch
    (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* verifyPassword(data: PayloadAction) {
  try {
    yield put(UserActionCreator.requestStart());
    const confirm = yield call(apiService.httpRequest, '/auth/verify', 'POST', data.payload);
    yield put(UserActionCreator.verifySucceed());
  } catch (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* authSagaWatcher() {
  yield takeEvery<SagaAction>(AuthSagasTypes.LOGIN_USER, loginUser);
  yield takeEvery<SagaAction>(AuthSagasTypes.REFRESH_PASSWORD, resetPassword);
  yield takeEvery<SagaAction>(AuthSagasTypes.VERIFY_PASSWORD_CHANGE, verifyPassword);
}

export default authSagaWatcher;
