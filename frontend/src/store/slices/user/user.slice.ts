import { createSlice } from '@reduxjs/toolkit';
import { AuthSagasTypes, ReducerName } from 'common/enums';
import { LoginResponse } from '../../../common/types';
import { ILogin, IVerPassword } from 'shared';

type UserState = {
  verifySucceed: boolean;
  authState: boolean;
  loading: boolean;
  registerState: boolean;
  resetState: string;
  error: string | null;
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: UserState = {
  verifySucceed: false,
  authState: false,
  resetState: '',
  registerState: false,
  loading: false,
  error: null,
  accessToken: null,
  refreshToken: null,
};

const { reducer, actions } = createSlice({
  name: ReducerName.USER,
  initialState,
  reducers: {
    requestStart: (state) => {
      state.error = null;
      state.loading = true;
      state.resetState = '';
      state.verifySucceed = false;
    },
    loginSucceed: (state, action) => {
      const { accessToken, refreshToken } = action.payload as LoginResponse;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.loading = false;
      state.authState = true;
    },
    resetSucceed: (state, action) => {
      state.resetState = action.payload;
    },
    requestFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    verifySucceed: (state) => {
      state.verifySucceed = true;
    },
    clearError: (state) => {
      state.error = null;
    },
    signUpSucceed: (state) => {
      state.registerState = true;
      state.loading = false;
    },
  },
});

export const signUpUserAction = (data: any) => ({
  type: AuthSagasTypes.REGISTER_USER,
  payload: data,
});
export const loginUserAction = (data: ILogin) => ({
  type: AuthSagasTypes.LOGIN_USER,
  payload: data,
});
export const resetPasswordAction = (email: { email: string }) => ({
  type: AuthSagasTypes.REFRESH_PASSWORD,
  payload: email,
});
export const verifyPasswordAction = (data: IVerPassword) => ({
  type: AuthSagasTypes.VERIFY_PASSWORD_CHANGE,
  payload: data,
});

const UserActionCreator = {
  ...actions,
};

export { UserActionCreator, reducer };
