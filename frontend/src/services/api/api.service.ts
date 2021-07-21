import axios, { Method } from 'axios';

const { REACT_APP_BACKEND_HOST, REACT_APP_API_ORIGIN_URL } = process.env;

type Header = {
  [key: string]: string
}

type Nullable<T> = null | T

class ApiService {
  _url = `${REACT_APP_BACKEND_HOST}${REACT_APP_API_ORIGIN_URL}`;

  instance = axios.create({
    baseURL: this._url,
  });

  httpRequest = async (url: string, method: Method = 'GET', body: any = null, params: any = null, headers: Nullable<Array<Header>> = null): Promise<any> => {
    const res = await this.instance.request({
      url,
      data: body,
      headers,
      method,
      params,
    });
    return res.data;
  };
}

export default ApiService;
