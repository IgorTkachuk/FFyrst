import axios, { Method } from 'axios';
import { LocalstorageKeys } from '../../common/enums';
import LocalstorageService from '../localstorage/localstorage.service';
import { HttpCode } from 'shared';

const { REACT_APP_BACKEND_HOST, REACT_APP_API_ORIGIN_URL } = process.env;

interface IHttpRequestConf {
  token?: string | null,
  params?: any,
  body?: any
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
    options: IHttpRequestConf = {
      body: null,
      params: null,
      token: null,
    },
  ): Promise<any> => {
    const storageTokens = this.localstorageService.getItem(
      LocalstorageKeys.AUTH,
    );
    const tokens = await this.checkTokens(storageTokens);

    const res = await this.instance.request({
      url,
      data: options.body,
      headers: {
        Authorization: `Bearer ${tokens?.accessToken || ''}`,
      },
      method,
      params: options.params,
    });

    return res.data;
  };

  async checkTokens(tokens: ITokens): Promise<ITokens | undefined> {
    try {
      await this.instance.request({
        url: '/auth/login',
        headers: {
          Authorization: `Bearer ${tokens?.accessToken || ''}`,
        },
        method: 'GET',
      });
      return tokens;
    } catch (e) {
      if (e.message.includes(HttpCode.UNAUTHORIZED)) {
        console.log('new tokens');
        const tokensData = await this.instance.request({
          url: '/auth/refresh-token',
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
      }
    }
  }
}

export default ApiService;
