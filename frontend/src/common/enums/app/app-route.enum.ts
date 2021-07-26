enum AppRoute {
  MAIN = '/main',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  REFRESH = '/reset',
  VERIFY_REFRESH = '/verify-refresh/:token',
  EMAIL_ACTIVATION = '/email-activation/:token',
  USER_MANAGE = '/user-manage',
  PLATFORM_EDIT = '/platform-edit',
  USER_PROFILE = '/profile',
  UPDATE_USER = '/update-user/:id',
  CREATE_USER = '/create-user',
  ACTIVATION = 'users/activation',
  TENANT_DETERMINE = 'tenants/platform',
  EDIT_PROFILE = '/profile/edit',
  NOTIFICATION_PROFILE = '/profile/notification',
  SECURITY_PROFILE = '/profile/security',
}

export { AppRoute };
