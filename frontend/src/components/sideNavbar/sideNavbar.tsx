import React, { useEffect } from 'react';
import SideNavbarElement from './sideNavbarElement';
import useMedia from 'use-media';
import {
  BsPerson,
  BsPeople,
  BsCardChecklist,
} from 'react-icons/bs';
import { AppRoute } from '../../common/enums';

interface IProps {
  isCollapsed: boolean,
  setCollapse: (val: boolean) => void
}

const SideNavbar: React.FC<IProps> = ({ isCollapsed, setCollapse }) => {

  const mob = useMedia({ minWidth: '1024px' });
  console.log(mob);
  const dropdownStatus = (e: any) => {
    if (!e.target.closest('.sidebar') && !e.target.classList.contains('collapse-btn')) {
      setCollapse(false);
    }
  };

  useEffect(() => {
    if(isCollapsed) {
      document.addEventListener('click', e => dropdownStatus(e));
    }
    return () => document.removeEventListener('click', e => dropdownStatus(e));
  }, [isCollapsed]);

  return (
    <>
      <ul
        className={`sidebar ${isCollapsed ? 'min-w-sidebar-content ' : 'min-w-side-collapse-content'} ${isCollapsed && !mob ? 'fixed left-0 top-10' : ''}} bg-white pt-4 px-1 content-area shadow z-20`}>
        <div className={`
        ${isCollapsed && mob ? 'sticky lg:top-20' : 'fixed'}`}>
          <SideNavbarElement icon={<BsPerson size={24} />} title={'Person page'} isCollapsed={isCollapsed} link={AppRoute.USER_PROFILE} />
          <SideNavbarElement icon={<BsPeople size={24} />} title={'Manage page'} isCollapsed={isCollapsed} link={AppRoute.USER_MANAGE} />
          <SideNavbarElement icon={<BsCardChecklist size={24} />} title={'Booking page'} isCollapsed={isCollapsed} />
        </div>
      </ul>
    </>
  );
};

export default SideNavbar;
