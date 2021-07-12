import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/auth/login';
import Refresh from './pages/auth/refresh';
import VerifyRefresh from './pages/auth/verify-refresh';
import Main from './pages/main';

const useRoute = (isAuth: boolean) => {
  if (!isAuth) {
    return (
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/refresh'>
          <Refresh />
        </Route>
        <Route path='/verify-refresh/:token'>
          <VerifyRefresh />
        </Route>
        <Redirect to='/login' />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path='/main'>
          <Main />
        </Route>
        <Redirect to='/main' />
      </Switch>
    );
  }
};

export default useRoute;
