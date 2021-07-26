import React from 'react';

interface IProps {
  idx?: string,
  row?: any,
  propF: string,
  propS?: string,
  propT?: string
}

const TextCell: React.FC<IProps> = ({ idx, row, propF, propS, propT }) => {
  return (
    <td
      className=' whitespace-nowrap text-center font-roboto px-2 py-1 text-gray-500'
      key={idx}>
      {row[propF]} {propS && row[propS]} {propT && row[propT]}
    </td>
  );
};

export default TextCell;
