import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';

// type UserState = {
//   email: string;
//   password: string;
//   authState: boolean;
//   authFailDescr: string;
//   token: string;
// };

const initialState: any = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  // authState: false,
  regFailDescr: '',
  token: '',
};

const { reducer, actions } = createSlice({
  name: ReducerName.REG,
  initialState,
  reducers: {
    reg: (state, action) => {
      const { email, password } = action.payload;
      console.log(JSON.stringify(action.payload, null, 2));

      return {
        ...action.payload,
      };
    },
    regSucceed: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      // state.authState = true;
    },
    regFailed: (state, action) => {
      const { err } = action.payload;
      state.regFailDescr = err;
    },
  },
});

const SignUpActionCreator = {
  ...actions,
};

export { SignUpActionCreator, reducer };
