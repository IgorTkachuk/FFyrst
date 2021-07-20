import React from 'react';
import { Header } from 'components/Header/Header';
import { AppRoute } from '../../common/enums';
import { Link } from '../../components/common';

const defaultUser = {
  firstName: 'Antananis',
  lastName: 'Papastatopuolous',
  linkToAvatar: 'http://link-to-avatar/ivan-ivanov'
}

const Main = () => {
  return (
    <>
      <Header user={defaultUser}/>
      <div>
        {/* for debug purpose */}
        <Link to={AppRoute.USER_PROFILE}>User profile</Link>
      </div>
    </>
  );
};

export { Main };
