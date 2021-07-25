enum AppRoute {
  MAIN = '/main',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  REFRESH = '/reset',
  VERIFY_REFRESH = '/verify-refresh/:token',
  EMAIL_ACTIVATION = '/email-activation/:token',
  USER_MANAGE = '/user-manage',
  USER_PROFILE = '/profile',
  UPDATE_USER = '/update-user/:id',
  CREATE_USER = '/create-user'
}

export { AppRoute };
