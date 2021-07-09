enum ResponseMessages {
  NOT_AUTHORIZED = 'Not authorized!',
  NON_EXISTING_EMAIL = 'Non-existing email',
  NON_MATCH_PASSWORDS = 'Passwords do not match',
  CONFIRMED = 'Confirmed',
  TOKEN_EXPIRED = 'Access Token was expired!',
  REDIS_REQUEST_ERROR = 'Redis request error!',
  WRONG_TOKEN_REQUEST = 'Wrong token request',
  TOKEN_NOT_IN_STORE = 'Refresh token is not in store!',
}

export { ResponseMessages };
