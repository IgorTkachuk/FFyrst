import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as Pages from './pages'

const useRoute = (isAuth: boolean): React.ReactElement => {
  if (!isAuth) {
    return (
      <Switch>
        <Route path='/login'>
          <Pages.Login />
        </Route>
        <Route path='/refresh'>
          <Pages.Refresh />
        </Route>
        <Route path='/verify-refresh/:token'>
          <Pages.VerifyRefresh />
        </Route>
        <Route path='/email-activation/:token'>
          <Pages.EmailActivation />
        </Route>
        <Redirect to='/login' />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path='/main'>
          <Pages.Main />
        </Route>
        <Redirect to='/main' />
      </Switch>
    );
  }
};

export default useRoute;
