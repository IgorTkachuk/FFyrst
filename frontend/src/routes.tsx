import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Registration, Login, Refresh, VerifyRefresh, Main } from 'pages';
import { AppRoute } from 'common/enums';

const useRoute = (isAuth: boolean) => {
  if (!isAuth) {
    return (
      <Switch>
        <Route path={AppRoute.SIGN_IN}>
          <Login />
        </Route>
        <Route path={AppRoute.SIGN_UP}>
          <Registration />
        </Route>
        <Route path={AppRoute.REFRESH}>
          <Refresh />
        </Route>
        <Route path={AppRoute.VERIFY_REFRESH}>
          <VerifyRefresh />
        </Route>
        <Redirect to={AppRoute.SIGN_IN} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Redirect to={AppRoute.MAIN} />
      </Switch>
    );
  }
};

export default useRoute;
