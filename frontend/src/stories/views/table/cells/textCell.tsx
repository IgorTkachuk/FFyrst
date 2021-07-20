import React from 'react';

interface IProps {
  idx?: string,
  row?: any,
  prop: string
}

const TextCell: React.FC<IProps> = ({ idx, row, prop }) => {
  return (
    <div
      className='custom flex justify-center items-center whitespace-nowrap width-test bg-green-200 font-roboto border-t-2 border-b-2  border-white px-2 py-1'
      key={idx}>
      {row[prop]}
    </div>
  );
};

export default TextCell;
