import React, { ReactElement } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './header.css';
import {IListItem, IHeaderUser} from './types';
import Avatar from 'assets/images/avatar-example.png';
import MainLogo from 'assets/images/temp-main-logo.png';

interface HeaderProps {
  user: IHeaderUser
}

const DROPDOWN_ITEMS: IListItem[] = [
  {
    label: 'Profile',
  },
  {
    label: 'Settings',
  },
  {
    label: 'Help',
  },
  {
    label: 'Log out',
  },
];

const Header = ({
  user = {
    firstName: '',
    lastName: '',
    linkToProfile: '',
    linkToAvatar: ''
  },
}: HeaderProps): ReactElement => {
  return (
    // <BrowserRouter>
    <header className="sticky top-0 left-0 w-full px-2 md:px-4 lg:px-10 border-b border-gray-200 bg-blue-50 shadow-md">
      <nav className="flex justify-between">
        <div className="burger-container w-1/3 py-2 sm:px-2 flex items-center">
          <div className="burger h-6 w-7 relative cursor-pointer">
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
        <div className="logo w-1/3 p-2 flex items-center justify-center">
          <Link to="/sign-in" className="block w-10 h-10">
            <img src={MainLogo} alt="MainLogo"/>
          </Link>
        </div>
        <div className="user w-1/3 cursor-pointer flex justify-end">
          <div className="inline-flex items-center py-2 sm:px-2 md:px-4 md:-mr-4 hover:bg-blue-100">
            <div className="w-10 md:mr-2 lg:mr-4 overflow-hidden border border-gray-400 rounded-full">
              <img src={Avatar} alt="user-photo" className="max-w-full" />
            </div>
            <div className="name text-gray-600 hidden md:block md:text-xs lg:text-base">{user.firstName} {user.lastName}</div>
          </div>
          <ul className="dropdown hidden">
            {DROPDOWN_ITEMS.map((item, i) => (
              <li key={i.toString()}>{item.label}</li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header };
