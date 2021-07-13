import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import activationSaga from './activation';
import {} from '../slices/';

function* rootSaga(): Generator {
  yield all([authSagaWatcher(), activationSaga()]);
}

export default rootSaga;
