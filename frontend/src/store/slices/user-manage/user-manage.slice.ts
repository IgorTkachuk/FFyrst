import { createSlice } from '@reduxjs/toolkit';
import { ReducerName, UserManageSagaTypes } from '../../../common/enums';

type Filter = 'all' | 'online' | 'offline'

interface IState {
  loading: boolean,
  error: string | null,
  count: number,
  activePage: number,
  search: string,
  useFilter: Filter,
  itemsPerPage: number,
  data: any
}

const initialState: IState = {
  loading: false,
  error: null,
  activePage: 1,
  data: [],
  useFilter: 'all',
  itemsPerPage: 2,
  search: '',
  count: 0,
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
    },
    succeedRequest: (state, action) => {
      const { count, data } = action.payload;
      state.count = count;
      state.data = data;
      state.loading = false;
    },
    failedRequest: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const getPaginationUsersAction = (data: any) => ({
  type: UserManageSagaTypes.GET_USERS_WITH_PAGINATION,
  payload: data,
});

const UserManageActionCreator = {
  ...actions,
};

export { UserManageActionCreator, reducer };
