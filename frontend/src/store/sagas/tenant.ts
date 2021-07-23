import { takeEvery, put, call } from 'redux-saga/effects';
import { HttpMethod, TenantSagasTypes } from 'common/enums';
import ApiService from 'services/api/api.service';
import { TenantActionCreator } from 'store/slices/tenant/tenant.slice';
import { AnyAction } from '@reduxjs/toolkit';
import { ApiPath, TenantsApiPath, ITenant, IIndustry } from 'shared';

const apiService = new ApiService();

function* determineTenant(action: AnyAction) {
  const url = ApiPath.TENANTS + TenantsApiPath.PLATFORM;

  let determinationResponse: ITenant | undefined;

  try {
    determinationResponse = yield call(apiService.httpRequest, url, HttpMethod.GET);

    yield put(TenantActionCreator.requestSucceed(determinationResponse));
  } catch(error) {
    yield put(TenantActionCreator.requestFailed(error.response.data.message));
  }

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

function* getAllIndustries() {
  try {
    yield put(TenantActionCreator.requestStart());
    const url = ApiPath.INDUSTRIES;
    const industriesList: IIndustry[] = yield call(
      apiService.httpRequest,
      url,
      HttpMethod.GET
    )
    yield put(TenantActionCreator.setAllIndustries(industriesList));

  } catch (e) {
    yield put(TenantActionCreator.requestFailed(e.message));
  }
}

function* TenantSaga(): Generator {
  yield takeEvery(TenantActionCreator.requestStart, determineTenant);
  yield takeEvery(TenantSagasTypes.UPDATE_TENANT, updateTenant);
  yield takeEvery(TenantSagasTypes.GET_ALL_INDUSTRIES, getAllIndustries);
}

export default TenantSaga;
