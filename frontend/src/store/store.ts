import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { userReducer } from './slices';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [ReducerName.USER]: userReducer,
  },
  middleware: (cdm) => cdm().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
