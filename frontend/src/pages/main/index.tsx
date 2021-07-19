import React from 'react';
import { Link } from '../../components/common';
import { AppRoute } from '../../common/enums';

const Main = () => {
  return (
    <div>
      {/* for debug purpose */}
      <Link to={AppRoute.USER_PROFILE}>User profile</Link>
    </div>
  );
};

export { Main };
