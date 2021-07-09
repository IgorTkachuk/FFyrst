import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { counterReducer, userReducer } from './slices';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [ReducerName.COUNTER]: counterReducer,
    [ReducerName.USER]: userReducer,
  },
  middleware: (cdm) => cdm().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
