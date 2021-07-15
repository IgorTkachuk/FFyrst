import ApiService from '../../services/api/api.service';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { UserDataActionCreator } from '../slices';
import { SagaAction } from '../../common/types';
import { UserDataSagaTypes } from '../../common/enums';

const apiService = new ApiService();

function* getUser(data: PayloadAction) {
  const accessToken = (data.payload as unknown) as string;
  if (!accessToken) return;
  try {
    const user = yield call(apiService.httpRequest, '/users/profile', 'GET', {
      token: accessToken,
    });
    yield put(UserDataActionCreator.setUser(user));
  } catch (e) {
    //should be implemented refresh token feature for frontend
  }
}

function* userDataSagaWatcher() {
  yield takeEvery<SagaAction>(UserDataSagaTypes.GET_USER, getUser);
}

export default userDataSagaWatcher;
