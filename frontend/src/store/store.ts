import { configureStore } from '@reduxjs/toolkit';
import { FileSagasTypes, ReducerName } from 'common/enums';
import { userReducer, activationReducer, fileReducer, userDataReducer, tenantReducer } from './slices';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [ReducerName.USER]: userReducer,
    [ReducerName.ACTIVATION]: activationReducer,
    [ReducerName.FILE]: fileReducer,
    [ReducerName.USER_DATA]: userDataReducer,
    [ReducerName.TENANT]: tenantReducer,
  },
  middleware: (cdm) => cdm(
    {
      serializableCheck: {
        ignoredActions: [FileSagasTypes.LOAD_TO_CLOUD],
      }
    }
  ).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
