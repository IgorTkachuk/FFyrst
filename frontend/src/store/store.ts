import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { signUpReducer } from './slices';
import { ReducerName } from 'common/enums';
import { userReducer } from './slices';
import rootSaga from 'sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // [ReducerName.REG]: signUpReducer,
    [ReducerName.USER]: userReducer,
  },
  middleware: (cdm) => cdm().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
