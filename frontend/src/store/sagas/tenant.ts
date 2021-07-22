import { takeEvery, put, call } from 'redux-saga/effects';
import { AppRoute, HttpMethod, TenantSagasTypes } from 'common/enums';
import ApiService from 'services/api/api.service';
import { TenantActionCreator } from 'store/slices/tenant/tenant.slice';
import { SagaAction } from 'common/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { ApiPath, TenantsApiPath } from 'shared';

const {  REACT_APP_API_ORIGIN_URL } = process.env;

const apiService = new ApiService();

export interface ITenant {
  id?: string
  name: string
  logoUrl: string
  legalAddress: string
  domainUrl: string
  createdAt: Date
  updatedAt: Date
}

function* determineTenant(action: Record<string, string>) {
  const url = ApiPath.TENANTS + TenantsApiPath.DOMAINURL;

  const determinationResponse: ITenant = yield call(apiService.httpRequest, url, HttpMethod.GET);
  yield put(TenantActionCreator.requestSucceed(determinationResponse))
  console.log('resp:', determinationResponse);
}

function* updateTenant(action: PayloadAction) {
  // yield put(TenantActionCreator.requestStart());
  yield put(TenantActionCreator.updateTenant(action.payload));
}

function* TenantSaga(): Generator {
  yield takeEvery(TenantActionCreator.requestStart, determineTenant);
  yield takeEvery(TenantSagasTypes.UPDATE_TENANT, updateTenant);
}

export default TenantSaga;
