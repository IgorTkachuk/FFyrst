import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// import './header.css';
import { IHeaderProps } from './types';
import MainLogo from 'assets/images/temp-main-logo.png';
import UserHeaderMenu from './UserHeaderMenu'



const Header = ({
  user = {
    firstName: '',
    lastName: '',
    linkToAvatar: ''
  },
}: IHeaderProps): ReactElement => {
  return (
    <header className="sticky top-0 left-0 w-full px-2 md:px-4 lg:px-10 border-b border-gray-200 bg-blue-50 shadow-md">
      <nav className="flex justify-between">
        <div className="burger-container w-1/3 md:py-1 flex items-center">
          <div className="burger h-9 w-10 p-2 md:h-11 md:w-12 md:p-3 hover:bg-blue-100 rounded-full cursor-pointer">
            <div className="h-full w-full relative">
              <span className="
                absolute w-full left-0 h-3px border border-gray-400
                bg-gray-400 rounded-full top-0"
              ></span>
              <span className="
                absolute w-full left-0 h-3px border border-gray-400
                bg-gray-400 rounded-full top-1/2 transform -translate-y-1/2"
              ></span>
              <span className="
                absolute w-full left-0 h-3px border border-gray-400
                bg-gray-400 rounded-full bottom-0"
              ></span>
            </div>
          </div>
        </div>
        <div className="logo w-1/3 px-2 flex items-center justify-center">
          <Link to="/sign-in" className="block w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12">
            <img src={MainLogo} alt="MainLogo"/>
          </Link>
        </div>
        <div className="user w-1/3 cursor-pointer flex justify-end relative">
          <UserHeaderMenu user={user}/>
        </div>
      </nav>
    </header>
  )
}

export { Header };
