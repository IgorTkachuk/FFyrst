import React from 'react';
import { Header } from 'components/Header/Header';
import { Link } from 'components/common';
import { AppRoute } from 'common/enums';



const Main = () => {
  return (
    <>
      {/* <Header user={defaultUser}/> */}
      <nav>
        <Link to={AppRoute.PLATFORM_EDIT}>PlatformEdit</Link>
      </nav>
      <div>
        Main page
        {/* for debug purpose */}
        <Link to={AppRoute.USER_PROFILE}>User profile</Link>
      </div>
    </>
  );
};

export { Main };
