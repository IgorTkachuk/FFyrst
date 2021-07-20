import React from 'react';
import { Header } from 'components/Header/Header';
import { Link } from '../../components/common';
import { AppRoute } from '../../common/enums';

const defaultUser = {
  firstName: 'Antananis',
  lastName: 'Papastatopuolous',
  linkToAvatar: 'http://link-to-avatar/ivan-ivanov',
};

const Main = () => {
  return (
    <>
      <Header user={defaultUser} />
      <div>
        Main page
        {/* for debug purpose */}
        <Link to={AppRoute.USER_PROFILE}>User profile</Link>
      </div>
    </>
  );
};

export { Main };
