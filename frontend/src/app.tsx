import * as React from 'react';
import useRoute from './routes';
import { useTypedSelector } from './hooks/useTypedSelector';
import { UserActionCreator } from './store/slices';
import { useEffect, useState } from 'react';
import LocalstorageService from './services/localstorage/localstorage.service';
import { LocalstorageKeys } from './common/enums';
import { useDispatch } from 'react-redux';
import { getUserAction } from './store/slices/user-data/user-data.slice';
import SideNavbar from './components/sideNavbar/sideNavbar';
import { BsList } from 'react-icons/bs';
import { TenantActionCreator } from 'store/slices/tenant/tenant.slice';

const App: React.FC = () => {
  const localstorageService = new LocalstorageService();
  const { authState, refreshToken, accessToken } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();
  const routes = useRoute(authState);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (authState) {
      localstorageService.setItem(LocalstorageKeys.AUTH, { refreshToken, accessToken });
    }
    const auth = localstorageService.getItem(LocalstorageKeys.AUTH);
    if (auth) {
      dispatch(UserActionCreator.loginSucceed(auth));
      dispatch(getUserAction(accessToken));
    }
  }, [authState]);

  useEffect(() => {
    dispatch(TenantActionCreator.requestStart('<p>'));
  }, []);

  return (
    <div className='w-full min-h-screen flex max-w-full'>
      {authState && <SideNavbar isCollapsed={isCollapsed} setCollapse={setIsCollapsed} />}
      <div
        className={`max-w-page-content bg-gray-50 ${isCollapsed ? 'def:mx-auto' : 'lg:mx-auto'} w-full sm:mx-4`}>
        <button className='collapse-btn' onClick={() => setIsCollapsed(!isCollapsed)}>
          <BsList className={'collapse-btn'} />
        </button>
        {routes}
      </div>
    </div>
  );
};

export default App;
