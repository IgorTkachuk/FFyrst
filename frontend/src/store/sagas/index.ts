import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import activationSaga from './activation';
import fileSagaWatcher from './file';
import userDataSagaWatcher from './user-data';
import userManageSagaWatcher from './user-manage';

function* rootSaga(): Generator {
  yield all([authSagaWatcher(), activationSaga(), fileSagaWatcher(), userDataSagaWatcher(), userManageSagaWatcher()]);
}

export default rootSaga;
