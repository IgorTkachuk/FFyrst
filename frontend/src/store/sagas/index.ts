import { all } from 'redux-saga/effects';
import authSagaWatcher from './login';


function* rootSaga() {
  yield all([authSagaWatcher()]);
}

export default rootSaga;
