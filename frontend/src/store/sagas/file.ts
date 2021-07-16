import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { FileActionCreator } from '../slices';
import ApiService from '../../services/api/api.service';
import { FileSagasTypes } from '../../common/enums';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaAction } from '../../common/types';

const apiService = new ApiService();

export interface ResponseGenerator {
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
  message?: string;
}

function* loadFileToCloud(data: PayloadAction) {
  try {
    yield put(FileActionCreator.requestStart());
    const url: ResponseGenerator = yield call(
      apiService.httpRequest,
      '/file-upload',
      'POST',
      { body: data.payload}
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
