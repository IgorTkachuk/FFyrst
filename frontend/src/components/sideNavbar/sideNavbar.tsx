import React, { useEffect } from 'react';
import SideNavbarElement from './sideNavbarElement';
import {
  BsFillPersonFill,
  BsFillInfoCircleFill,
  BsBookmarkFill,
  BsChatFill,
  BsHouseDoorFill,
} from 'react-icons/bs';

interface IProps {
  isCollapsed: boolean,
  setCollapse: (val: boolean) => void
}

const SideNavbar: React.FC<IProps> = ({ isCollapsed, setCollapse }) => {

  const dropdownStatus = (e: any) => {
    if (!e.target.closest('.sidebar') && !e.target.classList.contains('collapse-btn')) {
      setCollapse(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', e => dropdownStatus(e));
    return () => document.removeEventListener('click', e => dropdownStatus(e));
  }, []);

  return (
    <>
      <ul
        className={`sidebar ${isCollapsed ? 'w-full' : ''} ${isCollapsed ? 'fixed left-0 top-0' : ''} ${isCollapsed ? '' : 'divide-y-2 divide-gray-300'}  max-w-sidebar-content pt-4 px-1 lg:static bg-gray-100 content-area ring-1 ring-gray-300  `}>
        <SideNavbarElement icon={<BsFillPersonFill size={24} />} title={'Person page'} isCollapsed={isCollapsed} link={'/profile'} />
        <SideNavbarElement icon={<BsFillInfoCircleFill size={24} />} title={'Info page'} isCollapsed={isCollapsed} link={'/user-manage'} />
        <SideNavbarElement icon={<BsBookmarkFill size={24} />} title={'Bookmark page'} isCollapsed={isCollapsed} />
        <SideNavbarElement icon={<BsChatFill size={24} />} title={'Chat page'} isCollapsed={isCollapsed} />
        <SideNavbarElement icon={<BsHouseDoorFill size={24} />} title={'Home page'} isCollapsed={isCollapsed} />
      </ul>
    </>
  );
};

export default SideNavbar;
