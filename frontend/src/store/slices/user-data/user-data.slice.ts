import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'shared';
import { UserDataSagaTypes, ReducerName } from 'common/enums';

interface UserData {
  user: IUser | null;
}

const initialState: UserData = {
  user: null,
};

const { reducer, actions } = createSlice({
  name: ReducerName.USER_DATA,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const getUserAction = (data: IUser) => ({
  type: UserDataSagaTypes.GET_USER,
  payload: data,
});

const UserDataActionCreator = {
  ...actions,
};

export { UserDataActionCreator, reducer };
