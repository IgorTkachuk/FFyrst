import React from 'react';

interface IProps {
  idx?: string,
  row?: any,
  prop: string,
  title: string,
  callback: (id: any) => void
}

const BtnCell: React.FC<IProps> = ({ idx, prop, row, title, callback }) => {
  return (
    <div
      onClick={() => callback(row[prop])}
      className=' flex justify-center items-center font-semibold custom whitespace-nowrap width-test bg-green-200 font-roboto border-t-2 border-b-2  border-white px-2 py-1 hover:bg-green-400 hover:cursor-pointer'
      key={idx}>
      {title}
    </div>
  );
};

export default BtnCell;
