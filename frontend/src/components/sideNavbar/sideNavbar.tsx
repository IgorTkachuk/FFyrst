import React, { useEffect, useState } from 'react';
import { Button } from '../../stories/controls/button/Button';
import SideNavbarElement from './sideNavbarElement';
import {
  BsFillPersonFill,
  BsFillInfoCircleFill,
  BsBookmarkFill,
  BsChatFill,
  BsHouseDoorFill,
  BsList,
} from 'react-icons/bs';

interface IProps {
  isCollapsed: boolean,
  setCollapse: (val: boolean) => void
}

const SideNavbar: React.FC<IProps> = ({ isCollapsed, setCollapse }) => {

  const dropdownStatus = (e: any) => {
    if (!e.target.closest('.sidebar') && !e.target.classList.contains('collapse-btn')) {
      setCollapse(false);
      console.log(e.target);
    }
  };

  useEffect(() => {
    document.addEventListener('click', e => dropdownStatus(e));

    return () => document.removeEventListener('click', e => dropdownStatus(e));
  }, []);

  return (
    <>
      <ul
        className={`sidebar ${isCollapsed ? 'w-full' : ''} ${isCollapsed ? 'fixed left-0 top-0' : ''} ${isCollapsed ? '' : 'divide-y-2 divide-gray-300'} max-w-sidebar-content pt-20 px-1 lg:static bg-gray-100 min-h-screen ring-2 ring-gray-300 `}>
        <SideNavbarElement icon={<BsFillPersonFill size={24} />} title={'Person page'} isCollapsed={isCollapsed} />
        <SideNavbarElement icon={<BsFillInfoCircleFill size={24} />} title={'Info page'} isCollapsed={isCollapsed} />
        <SideNavbarElement icon={<BsBookmarkFill size={24} />} title={'Bookmark page'} isCollapsed={isCollapsed} />
        <SideNavbarElement icon={<BsChatFill size={24} />} title={'Chat page'} isCollapsed={isCollapsed} />
        <SideNavbarElement icon={<BsHouseDoorFill size={24} />} title={'Home page'} isCollapsed={isCollapsed} />
      </ul>
    </>
  );
};

export default SideNavbar;
