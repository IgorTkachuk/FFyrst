import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import activationSaga from './activation';
import tenantSaga from './tenant';
import {} from '../slices/';

function* rootSaga(): Generator {
  yield all([authSagaWatcher(), activationSaga(), tenantSaga()]);
}

export default rootSaga;
