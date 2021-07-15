import React, { ReactHTMLElement, ReactNode } from 'react';

interface IProps {
  icon: ReactNode | HTMLAllCollection,
  title: ReactNode | string,
  isCollapsed: boolean
}

const SideNavbarElement: React.FC<IProps> = ({ icon, title, isCollapsed }) => {
  return (
    <li
      className={` ${isCollapsed && 'space-x-4' } relative group flex p-2 hover:bg-gray-200 active:ring-1 active:ring-blue-700 active:rounded my-1 items-center text-dark-txt font-semibold hover:text-blue-400`}>
      <div className={`absolute left-9 hidden mx-2 ${!isCollapsed && 'group-hover:block'}`}>
        <div className='bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full'>
          {title}
        </div>
      </div>
      <div>{icon}</div>
      <div className={`${isCollapsed ? 'block' : 'hidden'} transition-display duration-200`}>{title}</div>
    </li>
  );
};

export default SideNavbarElement;
