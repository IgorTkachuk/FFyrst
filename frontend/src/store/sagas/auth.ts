import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { UserActionCreator } from '../slices';
import ApiService from '../../services/api/api.service';
import { AuthSagasTypes } from '../../common/enums';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaAction } from '../../common/types';

const apiService = new ApiService();

export interface ResponseGenerator {
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
  message?: string;
}

function* signUpUser(data: PayloadAction) {
  try {
    yield put(UserActionCreator.requestStart());
    const authResult: ResponseGenerator = yield call(
      apiService.httpRequest,
      '/users',
      'POST',
      data.payload,
    );
    yield put(UserActionCreator.signUpSucceed(authResult.tokens));
  } catch (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* loginUser(data: PayloadAction) {
  try {
    yield put(UserActionCreator.requestStart());
    const authResult: ResponseGenerator = yield call(
      apiService.httpRequest,
      '/auth/login',
      'POST',
      data.payload,
    );
    yield put(UserActionCreator.loginSucceed(authResult.tokens));
  } catch (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* resetPassword(data: PayloadAction) {
  try {
    yield put(UserActionCreator.requestStart());
    const confirm: ResponseGenerator = yield call(
      apiService.httpRequest,
      '/auth/reset',
      'POST',
      data.payload,
    );
    yield put(UserActionCreator.resetSucceed(confirm.message));
  } catch (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* verifyPassword(data: PayloadAction) {
  try {
    yield put(UserActionCreator.requestStart());
    const confirm: ResponseGenerator = yield call(
      apiService.httpRequest,
      '/auth/verify',
      'POST',
      data.payload,
    );
    yield put(UserActionCreator.verifySucceed());
  } catch (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* authSagaWatcher() {
  yield takeEvery<SagaAction>(AuthSagasTypes.LOGIN_USER, loginUser);
  yield takeEvery<SagaAction>(AuthSagasTypes.REFRESH_PASSWORD, resetPassword);
  yield takeEvery<SagaAction>(AuthSagasTypes.VERIFY_PASSWORD_CHANGE, verifyPassword,);
  yield takeLatest<SagaAction>(AuthSagasTypes.REGISTER_USER, signUpUser);
}

export default authSagaWatcher;
