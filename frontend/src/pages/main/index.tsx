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
      </div>
    </>
  );
};

export { Main };
