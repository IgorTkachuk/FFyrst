import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { IActivationMessage, ActivationStatus } from 'shared';

const initialState: IActivationMessage = {
  status: ActivationStatus.SUCCESS,
  email: '',
  message: '',
};

const { reducer, actions } = createSlice({
  name: ReducerName.ACTIVATION,
  initialState,
  reducers: {
    request: (state, action) => state,
    activate: (state, action) => state,
    setStatus: (state, action) => (
      state = {...state, ...action.payload}
    )
  },
});

const ActivationActionCreator = {
  ...actions,
};

export { ActivationActionCreator, reducer };
