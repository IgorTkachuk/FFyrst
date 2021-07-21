import React from 'react';
import { Link } from 'react-router-dom';

import { IListItem, IHeaderProps } from './types';
import Avatar from 'assets/images/avatar-example.png';
import { useDispatch } from 'react-redux';
import { logoutUserAction } from 'store/slices/auth/auth.slice';
import { useDetectOutsideClick } from 'hooks/useDetectOutsideClick';

const UserHeaderMenu = ({user}: IHeaderProps): React.ReactElement => {
  const dispatch = useDispatch();
  const [menuVisible, setMenuVisible] = useDetectOutsideClick('.header-dropdown', false);

  const DROPDOWN_ITEMS: IListItem[] = [
    {
      label: 'Log out',
      onClick: () => {
        dispatch(logoutUserAction())
      }
    },
  ];

  const itemsToRender = DROPDOWN_ITEMS.map((item, i) => {
    const key = i.toString();
    const className = 'block p-2 hover:bg-gray-100';
    if(item.link) {
      return (
        <li key={key}>
          <Link to={item.link} className={className}>{item.label}</Link>
        </li>
      )
    } else if(item.onClick) {
      return (
        <li className={className} key={key} onClick={item.onClick}>{item.label}</li>
      )
    }
    return <li className={className} key={key}>{item.label}</li>
  })

  return (
    <>
      <div
        className="inline-flex items-center py-1 md:py-2 sm:px-2 md:px-4 sm:hover:bg-blue-700 transition duration-200"
        onClick={() => setMenuVisible(true)}
      >
        <div className="w-8 sm:w-9 md:w-10 md:mr-2 lg:mr-4 overflow-hidden border border-gray-400 rounded-full">
          <img src={Avatar} alt="user-photo" className="max-w-full" />
        </div>
        <div className="name hidden md:block md:text-xs lg:text-base text-gray-50">{user.firstName} {user.lastName}</div>
      </div>
      {
        menuVisible &&
        <ul className="header-dropdown absolute top-full right-0 w-half-screen -mr-2 sm:mr-0 sm:w-1/2 bg-gray-50 divide-y divide-gray-200 border border-gray-200 text-gray-600">
          {itemsToRender}
        </ul>
      }
    </>
  )
}

export default UserHeaderMenu;
