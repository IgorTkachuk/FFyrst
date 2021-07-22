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

const platformDetails = {
  name: 'Super Medical Center',
  domainURL: 'supermedical.fyrst.com',
  supportEmail: 'support@supermedical.com',
  industry: 'healthcare',
  phoneNumber: '+380735556677',
  invoiceAddress: 'GA 30309',
  useCred: false,
  credURL: '',
  logoURL: 'https://image.freepik.com/free-vector/lion-head-logo-mascot_6427-342.jpg',
}

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
      // console.log(action.payload);

      // const { name, logoUrl, legalAddress, domainUrl } = action.payload;
      // state.tenant.name = name;
      // state.tenant.logoURL = logoUrl;
      // state.tenant.invoiceAddress = legalAddress;
      // state.tenant.domainURL = domainUrl
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
