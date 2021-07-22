import { createSlice } from '@reduxjs/toolkit';
import { ReducerName, TenantSagasTypes } from 'common/enums';
import { stat } from 'fs';

type TenantState = {
  tenant: {
    id: number,
    name: string;
    domainURL: string;
    supportEmail: string;
    industry: string;
    phoneNumber: string;
    invoiceAddress: string;
    useCred: boolean;
    credURL: string;
    logoURL: string;
  }
  status: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: TenantState = {
  tenant: {
    id: 0,
    name: '',
    domainURL: '',
    supportEmail: '',
    industry: '',
    phoneNumber: '',
    invoiceAddress: '',
    useCred: false,
    credURL: '',
    logoURL: '',
  },
  status: false,
  loading: false,
  error: null,
};

const { reducer, actions } = createSlice({
  name: ReducerName.TENANT,
  initialState,
  reducers: {
    requestStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    requestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    requestSucceed: (state, action) => {
      state.loading = false;
      state.tenant = {...state.tenant, ...action.payload}
    },
    updateTenant: (state, action) => {
      state.loading = false;
      state.tenant = action.payload;
      state.status = true;
    },
  },
});

const TenantActionCreator = {
  ...actions,
};

export const updateTenantAction = (data: any) => ({
  type: TenantSagasTypes.UPDATE_TENANT,
  payload: data,
});

export { TenantActionCreator, reducer };
