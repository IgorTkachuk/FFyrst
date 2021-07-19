import axios, { Method } from 'axios';

const { REACT_APP_BACKEND_HOST, REACT_APP_API_ORIGIN_URL } = process.env;

interface IHttpRequestConf {
  token?: string | null,
  params?: any,
  body?: any
}

class ApiService {
  _url = `${REACT_APP_BACKEND_HOST}${REACT_APP_API_ORIGIN_URL}`;

  instance = axios.create({
    baseURL: this._url,
  });

  httpRequest = async (url: string, method: Method = 'GET', options: IHttpRequestConf = {
    body: null,
    params: null,
    token: null,
  }): Promise<any> => {
    const res = await this.instance.request({
      url,
      data: options.body,
      headers: {
        'Authorization': `Bearer ${options.token}`,
      },
      method,
      params: options.params,
    });
    return res.data;
  };
}

export default ApiService;
