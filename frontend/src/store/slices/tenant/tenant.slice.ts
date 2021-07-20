import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { stat } from 'fs';

type TenantState = {
  name: string;
  logoUrl: string;
  legalAddress: string;
  domainUrl: string;
  loading: boolean;
  error: string | null;
};

const initialState: TenantState = {
  name: '',
  logoUrl: '',
  legalAddress: '',
  domainUrl:  '',
  loading: false,
  error: null,
};

const { reducer, actions } = createSlice({
  name: ReducerName.TENANT,
  initialState,
  reducers: {
    requestStart: (state, action) => {
      state.loading = true;
      state.error = null;
      console.log(action.payload);
    },
    requestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    requestSucceed: (state, action) => {
      state.loading = false;
      console.log(action.payload);

      const { name, logoUrl, legalAddress, domainUrl } = action.payload;
      state.name = name;
      state.logoUrl = logoUrl;
      state.legalAddress = legalAddress;
      state.domainUrl = domainUrl

    },
  },
});

const TenantActionCreator = {
  ...actions,
};

export { TenantActionCreator, reducer };
