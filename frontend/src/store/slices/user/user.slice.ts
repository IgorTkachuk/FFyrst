import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';

type UserState = {
  email: string;
  password: string;
  authState: boolean;
  authFailDescr: string;
  token: string;
};

const initialState: UserState = {
  email: '',
  password: '',
  authState: false,
  authFailDescr: '',
  token: '',
};

const { reducer, actions } = createSlice({
  name: ReducerName.USER,
  initialState,
  reducers: {
    set: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      console.log('===>', email, password);
    },
    loginSucceed: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      state.authState = true;
    },
    loginFailed: (state, action) => {
      const { err } = action.payload;
      state.authFailDescr = err;
    },
  },
});

const UserActionCreator = {
  ...actions,
};

export { UserActionCreator, reducer };
