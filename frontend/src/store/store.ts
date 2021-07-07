import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { counterReducer, userReducer } from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.COUNTER]: counterReducer,
    [ReducerName.USER]: userReducer,
  },
});

export { store };
