import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { BsList, BsX } from 'react-icons/bs';
import { IHeaderProps } from './types';
import MainLogo from 'assets/images/temp-main-logo.png';
import UserHeaderMenu from './UserHeaderMenu';


const Header = ({
                  user = {
                    firstName: '',
                    lastName: '',
                    linkToAvatar: '',
                  },
                  callback,
                  isCollapsed,
                }: IHeaderProps): ReactElement => {
  return (
    <header className='sticky top-0 left-0 w-full px-2 md:px-4 lg:px-10 border-b border-gray-200 bg-blue-50 shadow-md self-start'>
      <nav className='flex justify-between'>
        <button className={`collapse-btn w-1/3`} onClick={callback}>
          {isCollapsed ? <BsX className={'collapse-btn'} size={36} /> : <BsList className={'collapse-btn'} size={36} />}
        </button>
        <div className='logo w-1/3 px-2 flex items-center justify-center'>
          <Link to='/sign-in' className='block w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12'>
            <img src={MainLogo} alt='MainLogo' />
          </Link>
        </div>
        <div className='user w-1/3 cursor-pointer flex justify-end relative'>
          <UserHeaderMenu user={user} />
        </div>
      </nav>
    </header>
  );
};

export { Header };
