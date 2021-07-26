import ApiService from '../../services/api/api.service';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { UserManageActionCreator } from '../slices';
import { SagaActionWithTokenAndPayload } from '../../common/types';
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

function* getUserForUpdate(data: PayloadAction<{ id: number, token: string }>) {
  try {
    yield put(UserManageActionCreator.startRequest());
    const response = yield call(apiService.httpRequest, `${ApiPath.USERS}/${data.payload.id}`, 'GET', {
      token: data.payload.token,
    });
    yield put(UserManageActionCreator.succeedGetUser(response));
  } catch (e) {
    yield put(UserManageActionCreator.failedRequest(String(e)));
  }
}

function* updateUser(data: PayloadAction<{ id: number, user: any, token: string }>) {
  try {
    yield put(UserManageActionCreator.startRequest());
    const response = yield call(apiService.httpRequest, `${ApiPath.USERS}${UsersApiPath.MANAGE}/${data.payload.id}`, 'PUT', {
      token: data.payload.token,
      body: data.payload.user,
      params: { id: data.payload.id },
    });
    yield put(UserManageActionCreator.succeedUpDel());
  } catch (e) {
    yield put(UserManageActionCreator.failedRequest(String(e)));
  }
}

function* createUser(data: PayloadAction<{ user: any, token: string }>) {
  try {
    yield put(UserManageActionCreator.startRequest());
    const response = yield call(apiService.httpRequest, `${ApiPath.USERS}${UsersApiPath.MANAGE}`, 'POST', {
      token: data.payload.token,
      body: data.payload.user,
    });
    yield put(UserManageActionCreator.succeedUpDel());
  } catch (e) {
    yield put(UserManageActionCreator.failedRequest(String(e)));
  }
}

function* setUserActive(data: PayloadAction<{ id: number, token: string }>) {
  try {
    yield put(UserManageActionCreator.startSetActiveUser());
    const response = yield call(apiService.httpRequest, `${ApiPath.USERS}${UsersApiPath.MANAGE_ACTIVE}/${data.payload.id}`, 'PUT', {
      token: data.payload.token,
    });
    yield put(UserManageActionCreator.setActiveUser());
  } catch (e) {
    yield put(UserManageActionCreator.failedRequest(String(e)));
  }
}

function* userManageSagaWatcher() {
  yield takeEvery<SagaActionWithTokenAndPayload<{ pagination: any }>>(UserManageSagaTypes.MANAGE_GET_USERS_WITH_PAGINATION, getUsersWithPagination);
  yield takeEvery<SagaActionWithTokenAndPayload<{ id: number }>>(UserManageSagaTypes.MANAGE_GET_USER_TO_UPDATE, getUserForUpdate);
  yield takeEvery<SagaActionWithTokenAndPayload<{ user: any }>>(UserManageSagaTypes.MANAGE_CREATE_USER, createUser);
  yield takeEvery<SagaActionWithTokenAndPayload<{ id: number, user: any }>>(UserManageSagaTypes.MANAGE_UPDATE_USER, updateUser);
  yield takeEvery<SagaActionWithTokenAndPayload<{ id: number }>>(UserManageSagaTypes.SET_USER_ACTIVE, setUserActive);

}

export default userManageSagaWatcher;
