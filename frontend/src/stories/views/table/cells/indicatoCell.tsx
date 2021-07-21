import React, { ReactNode } from 'react';

interface IProps {
  idx?: string,
  row?: any,
  prop: string,
  title: ReactNode | HTMLAllCollection | string,
}

const IndicatorCell: React.FC<IProps> = ({ title, idx, prop, row }) => {
  return (
    <td
      className={`py-1 ${row[prop] ? 'text-red-600' : 'text-green-600'}`}
      key={idx}>
      {title}
    </td>
  );
};

export default IndicatorCell;
