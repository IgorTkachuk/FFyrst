import React, { ReactNode } from 'react';

interface IProps {
  idx?: string,
  row?: any,
  prop: string,
  title: ReactNode | HTMLAllCollection | string,
  callback: (id: any) => void
}

const BtnCell: React.FC<IProps> = ({ idx, prop, row, title, callback }) => {
  return (
    <td
      onClick={() => callback(row[prop])}
      className='whitespace-nowrap font-roboto py-1 text-gray-500 hover:text-gray-600 transition duration-200 hover:cursor-pointer'
      key={idx}>
      {title}
    </td>
  );
};

export default BtnCell;
