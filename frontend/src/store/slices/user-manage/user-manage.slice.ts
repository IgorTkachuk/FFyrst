import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../../common/enums';


interface IState {
  loading: boolean,
  error: string | null,
  count: number,
  activePage: number,
  search: string,
  useFilter: boolean,
  valueFilter: boolean
  itemsPerPage: number,
  data: any
}

const initialState: IState = {
  loading: false,
  error: null,
  activePage: 1,
  data: [],
  useFilter: false,
  itemsPerPage: 2,
  search: '',
  valueFilter: false,
  count: 0,
};


const { reducer, actions } = createSlice({
  name: ReducerName.USER_MANAGE,
  initialState,
  reducers: {
    changePage: (state, action) => {
      const { page } = action.payload;
      state.activePage = page;
    },
    changeItemsPerPage: (state, action) => {
      const { count } = action.payload;
      state.itemsPerPage = count;
    },
    changeFormState: (state, action) => {
      const { value } = action.payload;
      state.search = value;
    },
    changeUseFilter: (state, action) => {
      const { value } = action.payload;
      state.useFilter = value;
    },
    changeValueFilter: (state, action) => {
      const { value } = action.payload;
      state.valueFilter = value;
    },
    startRequest: (state) => {
      state.count = 0;
      state.loading = true;
      state.error = null;
      state.data = 0;
    },
    succeedRequest: (state, action) => {
      const { count, data } = action.payload;
      state.count = count;
      state.data = data;
      state.loading = false;
    },
    failedRequest: (state, action) => {
      const { error } = action.payload;
      state.error = error;
    },
  },
});

const UserManageActionCreator = {
  ...actions,
};

export { UserManageActionCreator, reducer };
