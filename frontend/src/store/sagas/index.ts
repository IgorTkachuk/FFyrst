import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import activationSaga from './activation';
import tenantSaga from './tenant';
import fileSagaWatcher from './file'
import userDataSagaWatcher from './user-data';
import userManageSagaWatcher from './user-manage';

function* rootSaga(): Generator {
  yield all([authSagaWatcher(), activationSaga(), fileSagaWatcher(), userDataSagaWatcher(), userManageSagaWatcher(),tenantSaga()]);

}

export default rootSaga;
