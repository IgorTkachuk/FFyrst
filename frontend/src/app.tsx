import * as React from 'react';
import useRoute from './routes';
import { useTypedSelector } from './hooks/useTypedSelector';
import { UserActionCreator } from './store/slices';
import { useEffect, useState } from 'react';
import LocalstorageService from './services/localstorage/localstorage.service';
import { LocalstorageKeys } from './common/enums';
import { useDispatch } from 'react-redux';
import SideNavbar from './components/sideNavbar/sideNavbar';
import { BsList } from 'react-icons/bs';

const App: React.FC = () => {
  const localstorageService = new LocalstorageService();
  const { authState, refreshToken, accessToken } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();
  const routes = useRoute(authState);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const setCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    if (authState) {
      localstorageService.setItem(LocalstorageKeys.AUTH, { refreshToken, accessToken });
    }
    const auth = localstorageService.getItem(LocalstorageKeys.AUTH);
    if (auth) {
      dispatch(UserActionCreator.loginSucceed(auth));
    }
  }, [authState]);

  return (
    <div className='w-full min-h-screen flex max-w-full'>
      <SideNavbar isCollapsed={isCollapsed} setCollapse={setCollapse} />
      <div className={`max-w-page-content bg-gray-50 ${isCollapsed ? 'def:mx-auto' : 'lg:mx-auto'} w-full sm:mx-4 flex justify-center items-center `}>
        <button onClick={setCollapse}><BsList /></button>
        {routes}
      </div>
    </div>
  );
};

export default App;
