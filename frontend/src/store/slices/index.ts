export {
  reducer as userReducer,
  UserActionCreator,
} from './auth/auth.slice';

export {
  reducer as activationReducer,
  ActivationActionCreator,
} from './activation/activation.slice';

export {
  reducer as fileReducer,
  FileActionCreator,
} from './file/file.slice';

export {
  reducer as userDataReducer,
  UserDataActionCreator,
} from './user-data/user-data.slice';

export {
  reducer as userManageReducer,
  UserManageActionCreator,
} from './user-manage/user-manage.slice';

export {
  reducer as tenantReducer,
} from './tenant/tenant.slice';
