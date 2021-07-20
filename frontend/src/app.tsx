import * as React from 'react';
import useRoute from './routes';
import { useTypedSelector } from './hooks/useTypedSelector';
import { UserActionCreator } from './store/slices';
import { useEffect } from 'react';
import LocalstorageService from './services/localstorage/localstorage.service';
import { LocalstorageKeys } from './common/enums';
import { useDispatch } from 'react-redux';
import ApiService from 'services/api/api.service';
import { AppRoute } from 'common/enums'
import { TenantActionCreator } from 'store/slices/tenant/tenant.slice';

const App: React.FC = () => {
  const localstorageService = new LocalstorageService();
  const { authState, refreshToken, accessToken } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();
  const routes = useRoute(authState);
  useEffect(() => {
    if (authState) {
      localstorageService.setItem(LocalstorageKeys.AUTH, { refreshToken, accessToken });
    }
    const auth = localstorageService.getItem(LocalstorageKeys.AUTH);
    if (auth) {
      dispatch(UserActionCreator.loginSucceed(auth));
    }
  }, [authState]);

  useEffect(() => {
    // const apiService = new ApiService();
    // const {  REACT_APP_API_ORIGIN_URL } = process.env;
    // const url = `http://${window.location.host}/${REACT_APP_API_ORIGIN_URL}${AppRoute.TENANT_DETERMINE}`;
    // apiService
    //   .httpRequest(url)
    //   .then((result) => console.log(result));
    dispatch(TenantActionCreator.requestStart('<p>'));
  }, []);


  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <div className='max-w-page-content mx-auto'>
        {routes}
      </div>
    </div>
  );
};

export default App;
