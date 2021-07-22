import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import activationSaga from './activation';
import tenantSaga from './tenant';
import fileSagaWatcher from './file'
import userDataSagaWatcher from './user-data';

function* rootSaga(): Generator {
  yield all([authSagaWatcher(), activationSaga(), fileSagaWatcher(), userDataSagaWatcher(), tenantSaga()]);
}

export default rootSaga;
