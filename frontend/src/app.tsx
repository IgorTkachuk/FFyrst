import * as React from 'react';
import useRoute from './routes';
import { useTypedSelector } from './hooks/useTypedSelector';
import { UserActionCreator, UserDataActionCreator } from './store/slices';
import { useEffect } from 'react';
import LocalstorageService from './services/localstorage/localstorage.service';
import { LocalstorageKeys } from './common/enums';
import { useDispatch } from 'react-redux';
import { getUserAction } from './store/slices/user-data/user-data.slice';

const App: React.FC = () => {
  const localstorageService = new LocalstorageService();
  const { authState, refreshToken, accessToken } = useTypedSelector(
    (state) => state.user,
  );
  const dispatch = useDispatch();
  const routes = useRoute(authState);
  useEffect(() => {
    if (authState) {
      localstorageService.setItem(LocalstorageKeys.AUTH, {
        refreshToken,
        accessToken,
      });
    }
    const auth = localstorageService.getItem(LocalstorageKeys.AUTH);
    if (auth) {
      dispatch(UserActionCreator.loginSucceed(auth));
      console.log('access token', accessToken);

      dispatch(getUserAction(accessToken));
    }
  }, [authState]);
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-page-content mx-auto">{routes}</div>
    </div>
  );
};

export default App;
