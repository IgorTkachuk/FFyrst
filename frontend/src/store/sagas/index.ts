import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';


function* rootSaga() {
  yield all([authSagaWatcher()]);
}

export default rootSaga;
