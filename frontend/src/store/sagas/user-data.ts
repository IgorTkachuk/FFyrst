import ApiService from '../../services/api/api.service';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { UserDataActionCreator } from '../slices';
import { SagaAction, SagaUserAction } from '../../common/types';
import { UserDataSagaTypes } from '../../common/enums';
import { ApiPath, UsersApiPath } from 'shared';

import { IProfile } from 'shared';

const apiService = new ApiService();

function* getUser(data: PayloadAction) {
  const accessToken = (data.payload as unknown) as string;
  if (!accessToken) return;
  try {
    const user = yield call(
      apiService.httpRequest,
      `${ApiPath.USERS}${UsersApiPath.PROFILE}`,
      'GET',
      {
        token: accessToken,
      },
    );
    yield put(UserDataActionCreator.setUser(user));
  } catch (e) {
    //should be implemented refresh token feature for frontend
  }
}

function* updateUser(
  data: PayloadAction<{ user: IProfile } & { token: string }>,
) {
  const accessToken = data.payload.token;
  if (!accessToken) return;
  try {
    const user = yield call(
      apiService.httpRequest,
      `${ApiPath.USERS}${UsersApiPath.PROFILE}`,
      'PUT',
      {
        body: data.payload.user,
        token: accessToken,
      },
    );

    yield put(UserDataActionCreator.setUser(user));
  } catch (e) {
    //should be implemented refresh token feature for frontend
  }
}

function* userDataSagaWatcher() {
  yield takeEvery<SagaAction>(UserDataSagaTypes.GET_USER, getUser);
  yield takeEvery<SagaUserAction>(UserDataSagaTypes.UPDATE_USER, updateUser);
}

export default userDataSagaWatcher;
