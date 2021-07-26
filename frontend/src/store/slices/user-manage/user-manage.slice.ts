import { createSlice } from '@reduxjs/toolkit';
import { ReducerName, UserManageSagaTypes } from '../../../common/enums';
import { IUser } from 'shared';

type Filter = 'all' | 'online' | 'offline'


interface IState {
  loading: boolean,
  error: string | null,
  count: number,
  activePage: number,
  search: string,
  useFilter: Filter,
  setActive: boolean,
  itemsPerPage: number,
  data: any,
  upDelStatus: boolean,
  user: any
}

const initialState: IState = {
  loading: false,
  error: null,
  activePage: 1,
  data: [],
  useFilter: 'all',
  setActive: false,
  itemsPerPage: 2,
  search: '',
  count: 0,
  user: {},
  upDelStatus: false,
};


const { reducer, actions } = createSlice({
  name: ReducerName.USER_MANAGE,
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.activePage = action.payload;
    },
    changeItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    changeFormState: (state, action) => {
      state.search = action.payload;
    },
    changeUseFilter: (state, action) => {
      state.useFilter = action.payload;
    },
    startRequest: (state) => {
      state.count = 0;
      state.loading = true;
      state.error = null;
      state.data = [];
      state.upDelStatus = false;
      state.user = {};
    },
    succeedRequest: (state, action) => {
      const { count, data } = action.payload;
      state.count = count;
      state.data = data;
      state.loading = false;
    },
    startSetActiveUser: (state) => {
      state.setActive = false;
      state.loading = true;
      state.error = null;
    },
    setActiveUser: (state) => {
      state.loading = false;
      state.setActive = true;
    },
    startGetUserRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.user = {};
    },
    succeedGetUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    succeedUpDel: (state) => {
      state.upDelStatus = true;
      state.loading = false;
    },
    failedRequest: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const getPaginationUsersAction = (data: any) => ({
  type: UserManageSagaTypes.MANAGE_GET_USERS_WITH_PAGINATION,
  payload: data,
});

export const getUserForUpdateAction = (data: any) => ({
  type: UserManageSagaTypes.MANAGE_GET_USER_TO_UPDATE,
  payload: data,
});

export const updateUserAction = (data: any) => ({
  type: UserManageSagaTypes.MANAGE_UPDATE_USER,
  payload: data,
});

export const createUserAction = (data: any) => ({
  type: UserManageSagaTypes.MANAGE_CREATE_USER,
  payload: data,
});

export const setUserActiveAction = (data: any) => ({
  type: UserManageSagaTypes.SET_USER_ACTIVE,
  payload: data,
});

const UserManageActionCreator = {
  ...actions,
};

export { UserManageActionCreator, reducer };
