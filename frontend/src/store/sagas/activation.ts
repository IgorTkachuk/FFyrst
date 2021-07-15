import { takeEvery, put, call } from 'redux-saga/effects';
import { AppRoute, HttpMethod } from 'common/enums';
import { IActivationMessage } from 'shared';
import { ActivationActionCreator } from '../slices';
import ApiService from 'services/api/api.service';

const apiService = new ApiService();

function* activateUser(action: Record<string, string>) {
  const {payload: token} = action;
  const url = `${AppRoute.ACTIVATION}/${token}`;

  const activationResponse: IActivationMessage = yield call(apiService.httpRequest, url, HttpMethod.PUT);
  yield put(ActivationActionCreator.setStatus(activationResponse))
}

function* sendActivationRequest(action: Record<string, string>) {
  const {payload: email} = action;
  const url = `${AppRoute.ACTIVATION}/request`;
  apiService.httpRequest(url, HttpMethod.PUT,)
  const activationResponse: IActivationMessage = yield call(
    apiService.httpRequest,
    url,
    HttpMethod.PUT,
    { body: { email } }
  );
  yield put(ActivationActionCreator.setStatus(activationResponse))
}

function* activationSaga(): Generator {
  yield takeEvery(ActivationActionCreator.activate, activateUser);
  yield takeEvery(ActivationActionCreator.request, sendActivationRequest)
}

export default activationSaga;
