enum AppRoute {
  MAIN = '/main',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  REFRESH = '/refresh',
  VERIFY_REFRESH = '/verify-refresh/:token',
  EMAIL_ACTIVATION = '/email-activation/:token',
  ACTIVATION = 'users/activation',
  TENANT_DETERMINE = 'tenants/domainurl',
}

export { AppRoute };
