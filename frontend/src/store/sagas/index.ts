import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import activationSaga from './activation';
import userDataSagaWatcher from './user-data';
import {} from '../slices/';

function* rootSaga(): Generator {
  yield all([authSagaWatcher(), activationSaga(), userDataSagaWatcher()]);
}

export default rootSaga;
