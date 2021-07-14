import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { IListItem, IHeaderProps } from './types';
import Avatar from 'assets/images/avatar-example.png';

const UserHeaderMenu = ({user}: IHeaderProps): React.ReactElement => {
  const [menuVisible, setMenuVisible] = useState(false);

  function hideMenu({target}: Event) {
    console.log(target, menuVisible);
    if (!(target instanceof Element)) return;
    if (!target?.closest('.header-dropdown')?.classList.contains('dropdown')) {
      // if(!menuVisible) return;
      setMenuVisible(false);
      // document.removeEventListener('click', hideMenu);
    }
  }

  useEffect(() => {
    console.log(menuVisible);
    if(menuVisible) {
      document.addEventListener('click', hideMenu);
    }
    return () => {
      document.removeEventListener('click', hideMenu);
    }
  }, [menuVisible])

  function showMenu() {
    // document.addEventListener('click', hideMenu);
    setMenuVisible(true);
  }

  const DROPDOWN_ITEMS: IListItem[] = [
    {
      label: 'Profile',
      link: '/user-profile'
    },
    {
      label: 'Log out',
    },
  ];

  const itemsToRender = DROPDOWN_ITEMS.map((item, i) => {
    const key = i.toString();
    const className = 'p-2';
    if(item.link) {
      return (
        <li className={className} key={key}>
          <Link to={item.link}>{item.label}</Link>
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
        className="inline-flex items-center py-2 sm:px-2 md:px-4 md:-mr-4 hover:bg-blue-100"
        onClick={showMenu}
      >
        <div className="w-10 md:mr-2 lg:mr-4 overflow-hidden border border-gray-400 rounded-full">
          <img src={Avatar} alt="user-photo" className="max-w-full" />
        </div>
        <div className="name text-gray-600 hidden md:block md:text-xs lg:text-base">{user.firstName} {user.lastName}</div>
      </div>
      {
        menuVisible &&
        <ul className="header-dropdown absolute top-full w-1/2 right-0 -mr-4 bg-gray-50 divide-y divide-gray-200 border border-gray-200">
          {itemsToRender}
        </ul>
      }
    </>
  )
}

export default UserHeaderMenu;
