import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { FileActionCreator } from '../slices';
import ApiService from '../../services/api/api.service';
import { FileSagasTypes } from '../../common/enums';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaAction } from '../../common/types';

const apiService = new ApiService();

function* loadFileToCloud(data: PayloadAction) {
  console.log('payload', data.payload);

  try {
    yield put(FileActionCreator.requestStart());
    const { url }: Record<string, string> = yield call(
      apiService.httpRequest,
      '/file-upload',
      'POST',
      {
        body: data.payload,
        headers: { 'Content-Type': 'multipart/form-data'}
      }
    );

    //temporary hardcode
    const tempUrl = 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg';

    yield put(FileActionCreator.cloudUploadSucceed(tempUrl));
  } catch (e) {
    yield put(FileActionCreator.requestFailed(String(e)));
  }
}

function* fileSagaWatcher(): Generator {
  yield takeEvery<SagaAction>(FileSagasTypes.LOAD_TO_CLOUD, loadFileToCloud);
}

export default fileSagaWatcher;
