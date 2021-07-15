import ApiService from '../../services/api/api.service';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { UserActionCreator } from '../slices';
import { SagaAction } from '../../common/types';
import { UserDataSagaTypes } from '../../common/enums';
import authSagaWatcher from './auth';

const apiService = new ApiService();

function* getUser(headers: PayloadAction) {
  try {
    const confirm = yield call(
      apiService.httpRequest,
      '/users',
      'GET',
      headers,
    );
    console.log('confirm = ', confirm);
  } catch (e) {
    yield put(UserActionCreator.requestFailed(String(e)));
  }
}

function* userDataSagaWatcher() {
  yield takeEvery<SagaAction>(UserDataSagaTypes.GET_USER, getUser);
}

export default userDataSagaWatcher;
