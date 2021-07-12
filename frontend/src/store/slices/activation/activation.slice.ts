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
    set: (state, action) => {
      const { email } = action.payload;
      state.email = email;
      console.log(action);
    },
    testReq: (state, action) => {
      return state
    },
    test: (state, action) => {
      state.email = action.payload
    },
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
