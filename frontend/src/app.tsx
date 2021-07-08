import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppRoute } from 'common/enums';
import { Link } from 'components/common';

import { Login, Registration } from 'pages';

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        {/* It's a temp navigation, I will delete it in the future */}
        <div>
          <ul className="App-navigation-list">
            <li>
              <Link to={AppRoute.ROOT}>Root</Link>
            </li>
            <li>
              <Link to={AppRoute.SIGN_IN}>Sign in</Link>
            </li>
            <li>
              <Link to={AppRoute.SIGN_UP}>Sign up</Link>
            </li>
          </ul>
        </div>

        {/* Make router component */}
        <Switch>
          <Route path={'/' + AppRoute.SIGN_IN}>
            <Login />
          </Route>
          <Route path={'/' + AppRoute.SIGN_UP}>
            <Registration />
          </Route>
          <Route path={'/' + AppRoute.ROOT}>Root Page</Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
