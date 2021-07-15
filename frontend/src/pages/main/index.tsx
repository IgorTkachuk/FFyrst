import React from 'react';
import { Header } from 'components/Header/Header';

const defaultUser = {
  firstName: 'Antananis',
  lastName: 'Papastatopuolous',
  linkToProfile: '/Antananis',
  linkToAvatar: 'http://link-to-avatar/ivan-ivanov'
}

const Main = () => {
  return (
    <>
      <Header user={defaultUser}/>
      <div>
        Main page
      </div>
    </>
  );
};

export { Main };
