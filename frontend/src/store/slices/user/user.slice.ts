import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';

type UserState = {
  email: string;
  password: string;
};

const initialState: UserState = {
  email: '',
  password: ''
};

const { reducer, actions } = createSlice({
  name: ReducerName.USER,
  initialState,
  reducers: {
    set: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    }
  },
});

const UserActionCreator = {
  ...actions,
};

export { UserActionCreator, reducer };
