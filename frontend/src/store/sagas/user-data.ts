import ApiService from '../../services/api/api.service';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { UserActionCreator } from '../slices';
import { SagaAction } from '../../common/types';
import { UserDataSagaTypes } from '../../common/enums';

const apiService = new ApiService();

function* getUser(data: PayloadAction) {
  const accessToken = (data.payload as unknown) as string;
  console.log('access token saga:', accessToken);
  try {
    const confirm = yield call(
      apiService.httpRequest,
      '/users/profile',
      'GET',
      {
        token: accessToken,
      },
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
