import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as Pages from './pages';
import { AppRoute } from 'common/enums';

const useRoute = (isAuth: boolean): React.ReactElement => {
  if (!isAuth) {
    return (
      <Switch>
        <Route path={AppRoute.SIGN_IN}>
          <Pages.Login />
        </Route>
        <Route path={AppRoute.SIGN_UP}>
          <Pages.Registration />
        </Route>
        <Route path={AppRoute.REFRESH}>
          <Pages.Reset />
        </Route>
        <Route path={AppRoute.VERIFY_REFRESH}>
          <Pages.VerifyRefresh />
        </Route>
        <Route path={AppRoute.EMAIL_ACTIVATION}>
          <Pages.EmailActivation />
        </Route>
        <Redirect to={AppRoute.SIGN_IN} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Pages.Main />
        </Route>
        <Route path={AppRoute.USER_MANAGE}>
          <Pages.UserManage />
        </Route>
        <Route path={AppRoute.USER_PROFILE}>
          <Pages.UserProfileDetails />
        </Route>
        <Route path={AppRoute.CREATE_USER}>
          <Pages.CreateUser />
        </Route>
        <Route path={AppRoute.UPDATE_USER}>
          <Pages.UpdateUser />
        </Route>
        <Redirect to={AppRoute.MAIN} />
      </Switch>
    );
  }
};

export default useRoute;
