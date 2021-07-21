import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { userReducer, activationReducer, fileReducer, userDataReducer, userManageReducer } from './slices';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [ReducerName.USER]: userReducer,
    [ReducerName.ACTIVATION]: activationReducer,
    [ReducerName.FILE]: fileReducer,
    [ReducerName.USER_DATA]: userDataReducer,
    [ReducerName.USER_MANAGE]: userManageReducer,
  },
  middleware: (cdm) => cdm().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
