enum UsersApiPath {
  ROOT = '/',
  $ID = '/:id',
  ACTIVATION_REQUEST = '/activation/request',
  $ACTIVATION = '/activation/:token',
  ACTIVATION = '/activation',
  PAG_USERS = '/pagination-users',
  PROFILE = '/profile',
  MANAGE = '/manage',
  $MANAGE = '/manage/:id',
  $MANAGE_ACTIVE = '/manage-active/:id',
  MANAGE_ACTIVE = '/manage-active'
}

export { UsersApiPath };
