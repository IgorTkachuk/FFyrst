import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDataSagaTypes, ReducerName } from 'common/enums';
import { IProfile } from 'shared';

interface UserData {
  user: IProfile;
  requestStatus: boolean;
}

const initialState: UserData = {
  user: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthDate: '',
    email: '',
    avatar: '',
  },
  requestStatus: false,
};

const { reducer, actions } = createSlice({
  name: ReducerName.USER_DATA,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IProfile>) => {
      state.user = action.payload;
      state.user.birthDate = state.user.birthDate.slice(0, 10);
    },

    requestFail: (state) => {
      state.requestStatus = false;
    },

    requestSuccess: (state) => {
      state.requestStatus = true;
    },
  },
});

export const getUserAction = (headers: string | null) => ({
  type: UserDataSagaTypes.GET_USER,
  payload: headers,
});

export const updateUserAction = (
  data: { user: IProfile } & { token: string },
) => ({
  type: UserDataSagaTypes.UPDATE_USER,
  payload: data,
});

const UserDataActionCreator = {
  ...actions,
};

export { UserDataActionCreator, reducer };
