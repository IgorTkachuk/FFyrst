import axios, { Method } from 'axios';
import { LocalstorageKeys } from '../../common/enums';
import LocalstorageService from '../localstorage/localstorage.service';
import { HttpCode, IUser } from 'shared';
import { ApiPath, AuthApiPath } from 'shared';
import { store } from '../../store/store';

const { REACT_APP_BACKEND_HOST, REACT_APP_API_ORIGIN_URL } = process.env;

interface IHttpRequestOptions {
  token?: string;
  params?: any;
  body?: any;
  headers?: any;
}

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

class ApiService {
  _url = `${REACT_APP_BACKEND_HOST}${REACT_APP_API_ORIGIN_URL}`;
  instance = axios.create({
    baseURL: this._url,
  });

  localstorageService = new LocalstorageService();

  httpRequest = async (
    url: string,
    method: Method = 'GET',
    options: IHttpRequestOptions = {
      body: null,
      params: null,
      headers: {},
      token: '',
    },
  ): Promise<any> => {
    const { body, params, headers } = options;
    const tokens = await this.refreshTokens();
    const res = await this.instance.request({
      url,
      data: body,
      headers: {
        Authorization: `Bearer ${tokens?.accessToken || ''}`,
        ...headers,
      },
      method,
      params,
    });

    return res.data;
  };

  async refreshTokens(): Promise<ITokens | undefined> {
    const state = store.getState();
    const userLoggedIn = state.user.authState;

    if (!userLoggedIn) {
      return;
    }
    const tokens = this.localstorageService.getItem(LocalstorageKeys.AUTH);

    try {
      // check if access token still valid
      await this.instance.request({
        url: `${ApiPath.AUTH}${AuthApiPath.LOGIN}`,
        headers: {
          Authorization: `Bearer ${tokens?.accessToken || ''}`,
        },
        method: 'GET',
      });
      return tokens;
    } catch (e) {
      if (e.message.includes(HttpCode.UNAUTHORIZED)) {
        try {
          // refresh tokens
          const tokensData = await this.instance.request({
            url: `${ApiPath.AUTH}${AuthApiPath.REFRESH_TOKEN}`,
            headers: {
              Authorization: `Bearer ${tokens?.refreshToken || ''}`,
            },
            method: 'POST',
          });

          const newTokens: ITokens = {
            refreshToken: tokensData.data.refreshToken,
            accessToken: tokensData.data.accessToken,
          };

          this.localstorageService.setItem(LocalstorageKeys.AUTH, newTokens);
          return newTokens;
        } catch (e) {
          this.localstorageService.removeItem(LocalstorageKeys.AUTH);
          return;
        }
      }
    }
  }
}

export default ApiService;
