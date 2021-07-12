import { takeEvery, put, call } from 'redux-saga/effects';

import { Http } from 'services';
import { ENV, AppRoute, HttpMethod, ContentType } from 'common/enums';
import { IActivationMessage } from 'shared';
import { ActivationActionCreator } from '../store/slices';

function upperCase(str: string): string {
  console.log(str);
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function* activateUser(action: Record<string, string>) {
  const {payload: token} = action;
  const url = `${ENV.API_PATH}/${AppRoute.ACTIVATION}/${token}`;

  const http = new Http();
  const activationResponse: IActivationMessage = yield call([http, http.load], url, {
    method: HttpMethod.PUT,
    contentType: ContentType.JSON,
    // payload: action
  });
  yield put(ActivationActionCreator.setStatus(activationResponse))
}

// function* loginUser() {
//   const http = new Http();
//   const load = http.load.bind(http);
//   try {
//     const authResult: Promise<unknown> = yield call(load, '/');
//     yield put(UserActionCreator.loginSucceed(authResult));
//   } catch (e) {
//     yield put(UserActionCreator.loginFailed(e.message));
//   }
// }

function* testWorker(action: any): Generator {
  const str = yield upperCase(action.payload);
  yield put(ActivationActionCreator.test(str))
}

function* activationSaga(): Generator {
  yield takeEvery(ActivationActionCreator.activate, activateUser);
}

export default activationSaga;
