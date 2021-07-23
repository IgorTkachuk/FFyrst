import { protocol, host, port } from 'config/url.config';

class UrlHelper {
  private _appHost: string;

  constructor() {
    this._appHost = '';
  }

  public set appHost(host: string) {
    this._appHost = host;
  }

  public getFullUrl(path: string): string {
    const trimmedPath = path.replace(/(^\/)|(\/$)/g, '');
    return protocol + '://' + this._appHost + '/' + trimmedPath
  }

  public getFullApiUrl(path: string): string {
    return protocol + '://' + host + ':' + port + path;
  }

  public strToUrl(url: string): URL {
    return new URL(url);
  }

  public parseURL (url: string | undefined): URL {
    if(url) {
      return new URL(url);
    }
    throw new TypeError(`Cannot parse non-url with type ${typeof url}`)
  }
}

const urlHelper = new UrlHelper();

export { urlHelper }
