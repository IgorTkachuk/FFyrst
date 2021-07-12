import {protocol, host, port} from 'config/url.config'

const getFullUrl = (path: string) : string => (
  protocol + '://' + host + ':' + port + path
);

export { getFullUrl };
