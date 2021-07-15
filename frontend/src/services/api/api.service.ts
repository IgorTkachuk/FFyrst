import axios, { Method } from 'axios';

const { REACT_APP_BACKEND_HOST, REACT_APP_API_ORIGIN_URL } = process.env;

interface IHttpRequestConf {
  token?: string,
  params?: any,
  body?: any
}

class ApiService {
  _url = `${REACT_APP_BACKEND_HOST}${REACT_APP_API_ORIGIN_URL}`;

  instance = axios.create({
    baseURL: this._url,
  });

  httpRequest = async (url: string, method: Method = 'GET', conf: IHttpRequestConf = {}): Promise<any> => {
    const res = await this.instance.request({
      url,
      data: conf.body,
      headers: {
        'Authorization': `Bearer ${conf.token}`,
      },
      method,
      params: conf.params,
    });
    return res.data;
  };
}

export default ApiService;
