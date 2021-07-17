import { createSlice } from '@reduxjs/toolkit';
import { FileSagasTypes, ReducerName } from 'common/enums';

type FileState = {
  loading: boolean;
  error: string | null;
  cloudURL: string;
};

const initialState: FileState = {
  loading: false,
  error: null,
  cloudURL: ''
};

const { reducer, actions } = createSlice({
  name: ReducerName.USER,
  initialState,
  reducers: {
    requestStart: (state) => {
      state.error = null;
      state.loading = true;
    },
    requestFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    cloudUploadSucceed: (state, action) => {
      state.loading = false;
      state.cloudURL = action.payload
    },
  },
});

export const loadFileToCloudAction = (data: any) => ({
  type: FileSagasTypes.LOAD_TO_CLOUD,
  payload: data,
});

const FileActionCreator = {
  ...actions,
};

export { FileActionCreator, reducer };
