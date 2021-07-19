import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { FileActionCreator } from '../slices';
import ApiService from '../../services/api/api.service';
import { FileSagasTypes, LocalstorageKeys } from '../../common/enums';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaAction } from '../../common/types';
import LocalstorageService from 'services/localstorage/localstorage.service';

const apiService = new ApiService();

function* loadFileToCloud(data: PayloadAction) {
  const ls = new LocalstorageService();
  const { accessToken } = ls.getItem(LocalstorageKeys.AUTH);

  try {
    yield put(FileActionCreator.requestStart());
    const { url }: Record<string, string> = yield call(
      apiService.httpRequest,
      '/file-upload',
      'POST',
      {
        body: data.payload,
        headers: { 'Content-Type': 'multipart/form-data'},
        token: accessToken
      }
    );

    yield put(FileActionCreator.cloudUploadSucceed(url));
  } catch (e) {
    yield put(FileActionCreator.requestFailed(String(e)));
  }
}

function* fileSagaWatcher(): Generator {
  yield takeEvery<SagaAction>(FileSagasTypes.LOAD_TO_CLOUD, loadFileToCloud);
}

export default fileSagaWatcher;
