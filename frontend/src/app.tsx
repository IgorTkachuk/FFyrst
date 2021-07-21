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

import { Header } from './components/Header/Header';


const defaultUser = {
  firstName: 'Antananis',
  lastName: 'Papastatopuolous',
  linkToAvatar: 'http://link-to-avatar/ivan-ivanov',
};

const App: React.FC = () => {
  const localstorageService = new LocalstorageService();
  const { authState, refreshToken, accessToken } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();
  const routes = useRoute(authState);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const burgerClick = () => {
    setIsCollapsed(!isCollapsed);
  };

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
    <div className='w-full min-h-screen max-w-full'>
      { authState && <Header user={defaultUser} callback={burgerClick} isCollapsed={isCollapsed} />}
      <div className={'flex'}>
        {authState && <SideNavbar isCollapsed={isCollapsed} setCollapse={setIsCollapsed} />}
        <div
          className={`max-w-page-content ${isCollapsed ? 'def:mx-auto' : 'lg:mx-auto'} w-full sm:mx-4 px-10`}>
          {routes}
        </div>
      </div>
    </div>
  );
};

export default App;
