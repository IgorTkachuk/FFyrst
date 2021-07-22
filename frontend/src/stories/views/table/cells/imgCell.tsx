import React from 'react';

interface IProps {
  idx?: string,
  row?: any,
  prop: string,
  alt: string
}

const ImgCell: React.FC<IProps> = ({ prop, row, idx, alt }) => {
  return (
    <td
      className={'py-1'}
      key={idx}>
      <img className="max-w-img-content h-auto rounded-full" src={row[prop]} alt={row[alt]} />
    </td>
  );
};

export default ImgCell;
