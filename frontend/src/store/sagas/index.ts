import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import activationSaga from './activation';
import fileSagaWatcher from './file'
import {} from '../slices/';

function* rootSaga(): Generator {
  yield all([authSagaWatcher(), activationSaga(), fileSagaWatcher()]);
}

export default rootSaga;
