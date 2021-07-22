import { takeEvery, put, call } from 'redux-saga/effects';
import { HttpMethod, TenantSagasTypes } from 'common/enums';
import ApiService from 'services/api/api.service';
import { TenantActionCreator } from 'store/slices/tenant/tenant.slice';
import { AnyAction } from '@reduxjs/toolkit';
import { ApiPath, TenantsApiPath, ITenant } from 'shared';

const apiService = new ApiService();

function* determineTenant(action: AnyAction) {
  const url = ApiPath.TENANTS + TenantsApiPath.DOMAINURL;

  const determinationResponse: ITenant = yield call(apiService.httpRequest, url, HttpMethod.GET);
  yield put(TenantActionCreator.requestSucceed(determinationResponse))
}

function* updateTenant(action: AnyAction) {
  try {
    yield put(TenantActionCreator.requestStart());
    const url = `${ApiPath.TENANTS}/${action.payload.id}`;
    const updatedTenant: ITenant = yield call(
      apiService.httpRequest,
      url,
      HttpMethod.PUT,
      { body: action.payload });
    yield put(TenantActionCreator.updateTenant(updatedTenant));

  } catch (e) {
    yield put(TenantActionCreator.requestFailed(e.message));
  }
}

function* TenantSaga(): Generator {
  yield takeEvery(TenantActionCreator.requestStart, determineTenant);
  yield takeEvery(TenantSagasTypes.UPDATE_TENANT, updateTenant);
}

export default TenantSaga;
