import * as React from 'react';
import useRoute from './routes';
import { useTypedSelector } from './hooks/useTypedSelector';
import { UserActionCreator } from './store/slices';
import { useEffect } from 'react';
import LocalstorageService from './services/localstorage/localstorage.service';
import { LocalstorageKeys } from './common/enums';
import { useDispatch } from 'react-redux';
import { TenantActionCreator } from 'store/slices/tenant/tenant.slice';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

const App: React.FC = () => {
  const localstorageService = new LocalstorageService();
  const { authState, refreshToken, accessToken } = useTypedSelector(state => state.user);
  const { error: tenantDetermineError } = useTypedSelector(state => state.tenant);
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
    if(tenantDetermineError){
      store.addNotification({
        title: "Error!",
        message: tenantDetermineError,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
    }
  },[tenantDetermineError]);

  useEffect(() => {
    dispatch(TenantActionCreator.requestStart('<p>'));
  }, []);


  return (
    <>
      <ReactNotification />
      <div className='w-full min-h-screen bg-gray-50'>
        <div className='max-w-page-content mx-auto'>
          {routes}
        </div>
      </div>
    </>
  );
};

export default App;
