import React, { ReactHTMLElement, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

interface IProps {
  icon: ReactNode | HTMLAllCollection,
  title: ReactNode | string,
  isCollapsed: boolean,
  link?: string
}

const SideNavbarElement: React.FC<IProps> = ({ icon, title, isCollapsed, link }) => {
  const history = useHistory();
  return (
    <li
      onClick={() => {
        link && history.push(link);
      }}
      className={` ${isCollapsed && 'space-x-4'} relative group flex justify-between p-2 hover:shadow active:ring-1 bg-custom-blue rounded my-1 items-center text-custom-white font-semibold hover:text-blue-400`}>
      <div className={`absolute left-9 hidden mx-2 ${!isCollapsed && 'group-hover:block'}`}>
        <div className='bg-custom-background text-custom-blue text-xs rounded py-1 px-4 right-0 bottom-full border-2 border-custom-blue min-w-min w-full'>
          {title}
        </div>
      </div>
      <div className={` ${isCollapsed && 'space-x-4'} flex`}>
        <div>{icon}</div>
        <div className={`${isCollapsed ? 'block' : 'hidden'} transition-display duration-200`}>{title}</div>
      </div>
      <div className={`${isCollapsed ? 'block' : 'hidden'}`}><BsChevronRight /></div>
    </li>
  );
};

export default SideNavbarElement;
