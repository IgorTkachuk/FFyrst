import React from 'react';
import { Link } from '../../components/common';
import { AppRoute } from '../../common/enums';

const Main = () => {
  return (
    <div>
      <Link to={AppRoute.USER_PROFILE}>Profile</Link>
    </div>
  );
};

export { Main };
