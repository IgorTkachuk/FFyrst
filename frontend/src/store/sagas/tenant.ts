import { takeEvery, put, call } from 'redux-saga/effects';
import { AppRoute, HttpMethod } from 'common/enums';
import ApiService from 'services/api/api.service';
import { TenantActionCreator } from 'store/slices/tenant/tenant.slice';

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
  const url = `http://${window.location.host}/${REACT_APP_API_ORIGIN_URL}${AppRoute.TENANT_DETERMINE}`;

  let determinationResponse: ITenant | undefined;

  try {
    determinationResponse = yield call(apiService.httpRequest, url, HttpMethod.GET);
    yield put(TenantActionCreator.requestSucceed(determinationResponse));
  } catch(error) {
    yield put(TenantActionCreator.requestFailed(error.response.data.message));
  }

}

function* TenantSaga(): Generator {
  yield takeEvery(TenantActionCreator.requestStart, determineTenant);
}

export default TenantSaga;
