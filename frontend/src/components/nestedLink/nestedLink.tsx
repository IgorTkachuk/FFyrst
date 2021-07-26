import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface ISubLine {
  name: string,
  link: string
}

interface IProps {
  subLines: ISubLine[],
  isActive: boolean,
  isHidden: boolean,
}

const NestedLink: React.FC<IProps> = ({ subLines, isHidden,isActive }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <div className={`${isHidden || !isActive? 'hidden' : 'block'} space-y-2 mt-2`}>
      {subLines.map((el, idx) =>
        <div
          className={`${pathname.match(el.link) ? 'bg-custom-blue text-white' : 'text-custom-blue'} font-semibold rounded e hover:shadow hover:cursor-pointer h-10 flex items-center pl-4`}
          key={idx} onClick={() => history.push(el.link)}>{el.name}</div>,
      )}
    </div>
  );
};

export default NestedLink;
