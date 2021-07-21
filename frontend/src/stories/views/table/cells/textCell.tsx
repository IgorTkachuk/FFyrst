import React from 'react';

interface IProps {
  idx?: string,
  row?: any,
  prop: string
}

const TextCell: React.FC<IProps> = ({ idx, row, prop }) => {
  return (
    <td
      className=' whitespace-nowrap text-center font-roboto px-2 py-1 text-gray-500'
      key={idx}>
      {row[prop]}
    </td>
  );
};

export default TextCell;
