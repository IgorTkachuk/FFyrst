import React from 'react';
import { Header } from 'components/Header/Header';
import { Link } from 'components/common';
import { AppRoute } from 'common/enums';



const Main = () => {
  return (
    <>
      {/* <Header user={defaultUser}/> */}
      <div>
        Main page
        {/* for debug purpose */}
        <nav className='bg-green-50 divide-x flex'>
        <div className='py-2 px-4'>
        <Link to={AppRoute.PLATFORM_EDIT}>PlatformEdit</Link>
        </div>
        <div className='py-2 px-4'>
        <Link to={AppRoute.USER_PROFILE}>User profile</Link>
        </div>
      </nav>
      </div>
    </>
  );
};

export { Main };
