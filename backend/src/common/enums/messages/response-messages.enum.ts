enum ResponseMessages {
  NOT_AUTHORIZED = 'Not authorized!',
  NON_EXIST_EMAIL = 'Non-existing email',
  NON_MATCH_PASSWORDS = 'passwords do not match',
  TOKEN_EXPIRED = 'Access Token was expired!',
  REDIS_REQUEST_ERROR = 'Redis request error!',
  WRONG_TOKEN_REQUEST = 'Wrong token request',
  TOKEN_NOT_IN_STORE = 'Refresh token is not in store!',
}

export { ResponseMessages };
