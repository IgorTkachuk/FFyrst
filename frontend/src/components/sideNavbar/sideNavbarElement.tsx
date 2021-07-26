import React, { ReactHTMLElement, ReactNode, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
import NestedLink from '../nestedLink/nestedLink';

interface ISubLine {
  name: string,
  link: string
}

interface IProps {
  icon: ReactNode | HTMLAllCollection,
  title: ReactNode | string,
  isCollapsed: boolean,
  link: string
  subLines?: ISubLine[]
}

const SideNavbarElement: React.FC<IProps> = ({ icon, title, isCollapsed, link, subLines =[] }) => {
  const [isHidden, setIsHidden] = useState(true);
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <li>
      <div
        className={` ${isCollapsed && 'space-x-4'} relative group flex justify-between p-2 hover:shadow hover:cursor-pointer ${(!isHidden && isCollapsed) && (`${pathname.match(link) ? 'ring-blue-400' : 'ring-custom-blue' } ring-2`)}${pathname.match(link) ? 'text-white bg-custom-blue' : 'text-custom-blue bg-white'} rounded my-1 items-center font-semibold `}>
        <div className={`absolute left-9 hidden mx-2 ${!isCollapsed && 'group-hover:block'}`}>
          <div
            className='bg-custom-background text-custom-blue text-xs rounded py-1 px-4 right-0 bottom-full border-2 border-custom-blue min-w-min w-full'>
            {title}
          </div>
        </div>
        <div className={` ${isCollapsed && 'space-x-4'} flex`}>
          <div
            onClick={() => {
              link && history.push(link);
            }}
          >{icon}</div>
          <div
            onClick={() => {
              link && history.push(link);
            }}
            className={`${isCollapsed ? 'block' : 'hidden'} transition-display duration-200`}>{title}</div>
        </div>
        <div
          onClick={() => subLines && setIsHidden(!isHidden)}
          className={`${isCollapsed ? 'block' : 'hidden'}`}>{isHidden ? <BsChevronRight className='sidebar' /> :
          <BsChevronDown className='sidebar' />}</div>
      </div>
      {subLines && <NestedLink subLines={subLines} isActive={isCollapsed} isHidden={isHidden} />
      }
    </li>
  );
};

export default SideNavbarElement;
