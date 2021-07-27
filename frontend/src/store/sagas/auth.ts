import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { UserActionCreator } from '../slices';
import ApiService from '../../services/api/api.service';
import { ApiPath, AuthApiPath } from 'shared';
import { AuthSagasTypes, LocalstorageKeys } from '../../common/enums';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaAction } from '../../common/types';
import LocalstorageService from 'services/localstorage/localstorage.service';

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
    const confirm: ResponseGenerator = yield call(
      apiService.httpRequest,
      ApiPath.USERS,
      'POST',
      {
        body: data.payload,
      },
    );
    yield put(UserActionCreator.signUpSucceed());
  } catch (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* loginUser(data: PayloadAction) {
  try {
    yield put(UserActionCreator.requestStart());
    const authResult: ResponseGenerator = yield call(
      apiService.httpRequest,
      `${ApiPath.AUTH}${AuthApiPath.LOGIN}`,
      'POST',
      {
        body: data.payload,
      },
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
      `${ApiPath.AUTH}${AuthApiPath.RESET_PASSWORD}`,
      'POST',
      { body: data.payload },
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
      `${ApiPath.AUTH}${AuthApiPath.VERIFY_PASSWORD}`,
      'POST',
      { body: data.payload },
    );
    yield put(UserActionCreator.verifySucceed());
  } catch (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* logoutUser() {
  yield put(UserActionCreator.requestStart());
  const localstorageService = new LocalstorageService();
  localstorageService.removeItem(LocalstorageKeys.AUTH);
  const token = localstorageService.getItem(LocalstorageKeys.AUTH);
  if(!token) {
    yield put(UserActionCreator.logoutSucceed());
  } else {
    yield put(UserActionCreator.requestFailed('Logout failed'));
  }
}

function* authSagaWatcher() {
  yield takeEvery<SagaAction>(AuthSagasTypes.LOGIN_USER, loginUser);
  yield takeEvery<SagaAction>(AuthSagasTypes.REFRESH_PASSWORD, resetPassword);
  yield takeEvery<SagaAction>(
    AuthSagasTypes.VERIFY_PASSWORD_CHANGE,
    verifyPassword,
  );
  yield takeLatest<SagaAction>(AuthSagasTypes.REGISTER_USER, signUpUser);
  yield takeEvery<SagaAction>(AuthSagasTypes.LOGOUT_USER, logoutUser);
}

export default authSagaWatcher;