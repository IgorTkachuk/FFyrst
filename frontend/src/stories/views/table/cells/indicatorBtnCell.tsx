import React, { ReactNode } from 'react';

interface IProps {
  idx?: string,
  row?: any,
  prop: string,
  id: string,
  on: ReactNode | HTMLAllCollection | string,
  off: ReactNode | HTMLAllCollection | string,
  callback: (id: any) => void
}

const indicatorBtnCell: React.FC<IProps> = ({ idx, id, row, on, prop, off, callback }) => {
  return (
    <td
      onClick={() => callback(row[id])}
      className='whitespace-nowrap font-roboto py-1 text-gray-500 hover:text-gray-600 transition duration-200 hover:cursor-pointer'
      key={idx}>
      {row[prop] ? on : off}
    </td>
  );
};

export default indicatorBtnCell;
