import axios, { Method } from 'axios';

const { REACT_APP_BACKEND_HOST, REACT_APP_API_ORIGIN_URL, M } = process.env;

interface IHttpRequestOptions {
  token?: string,
  params?: any,
  body?: any
}

type Header = {
  [key: string]: string
}

type Nullable<T> = null | T

class ApiService {
  _url = `${REACT_APP_BACKEND_HOST}${REACT_APP_API_ORIGIN_URL}`;

  instance = axios.create({
    baseURL: this._url,
  });

  httpRequest = async (
    url: string,
    method: Method = 'GET',
    options: IHttpRequestOptions = {}
  ): Promise<any> => {
    const {
      body = null,
      params = null,
      token = null
    } = options;
    const res = await this.instance.request({
      url,
      data: body,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method,
      params,
    });
    return res.data;
  };
}

export default ApiService;
