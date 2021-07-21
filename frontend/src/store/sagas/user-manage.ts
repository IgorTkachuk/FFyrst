import ApiService from '../../services/api/api.service';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { UserManageActionCreator } from '../slices';
import { SagaUsersPaginationAction } from '../../common/types';
import { UserManageSagaTypes } from '../../common/enums';
import { ApiPath, UsersApiPath } from 'shared';

const apiService = new ApiService();

function* getUsersWithPagination(data: PayloadAction<{ pagination: any, token: string }>) {
  try {
    yield put(UserManageActionCreator.startRequest());
    const response = yield call(apiService.httpRequest, `${ApiPath.USERS}${UsersApiPath.PAG_USERS}`, 'POST', {
      body: data.payload.pagination,
      token: data.payload.token,
    });
    yield put(UserManageActionCreator.succeedRequest(response));
  } catch (e) {
    yield put(UserManageActionCreator.failedRequest(String(e)));
  }
}

function* userManageSagaWatcher() {
  yield takeEvery<SagaUsersPaginationAction>(UserManageSagaTypes.GET_USERS_WITH_PAGINATION, getUsersWithPagination);
}

export default userManageSagaWatcher;
