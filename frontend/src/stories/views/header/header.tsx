import React, { ReactElement } from 'react';
import './header.css';
import {IListItem, IHeaderUser} from './types';
import Avatar from '../../assets/avatar_example.png'

interface HeaderProps {
  burgerItems: IListItem[],
  dropdownItems: IListItem[],
  user: IHeaderUser
}


const Header = ({
  dropdownItems = [],
  user = {
    firstName: '',
    lastName: '',
    linkToProfile: '',
    linkToAvatar: ''
  },
  // ...props
}: HeaderProps): ReactElement => {
  return (
    <header role="banner" className="px-0 mx-0 container mx-auto pt-6 mb-6">
      <nav className="flex justify-between">
        <div className="burger flex-1/3"></div>
        <div className="logo flex-1/3"></div>
        <div className="user flex-1/3">
          <div className="user-main">
            <div className="avatar">
              <img src={Avatar} alt="user-photo" className="" />
            </div>
            <div className="name">{user.firstName} {user.lastName}</div>
          </div>
          <ul className="dropdown">
            {dropdownItems.map((item, i) => (
              <li key={i.toString()}>{item.label}</li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}



// const BTN_COLORS = {
//   blue: 'bg-blue-500',
//   red: 'bg-red-500',
//   green: 'bg-green-500',
// };

// const BTN_COLORS_ON_HOVER = {
//   blue: 'bg-blue-400',
//   red: 'bg-red-400',
//   green: 'bg-green-400',
// };

// const BTN_SIZES = {
//   small: 'text-sm',
//   medium: 'text-lg',
//   big: 'text-2xl',
// };

export { Header };
