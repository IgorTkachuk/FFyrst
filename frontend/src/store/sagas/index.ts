import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import activationSaga from './activation';
import fileSagaWatcher from './file';
import {} from '../slices/';
import userDataSagaWatcher from './user-data';

function* rootSaga(): Generator {
  yield all([
    authSagaWatcher(),
    activationSaga(),
    fileSagaWatcher(),
    userDataSagaWatcher(),
  ]);
}

export default rootSaga;
