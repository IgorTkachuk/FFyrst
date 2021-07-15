enum AppRoute {
  MAIN = '/main',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  REFRESH = '/refresh',
  VERIFY_REFRESH = '/verify-refresh/:token',
  EMAIL_ACTIVATION = '/email-activation/:token',
  USER_EDIT = '/user-edit'
}

export { AppRoute };
