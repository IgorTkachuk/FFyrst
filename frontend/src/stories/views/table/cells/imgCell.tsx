import React from 'react';

interface IProps {
  idx?: string,
  row?: any,
  prop: string,
  alt: string
}

const ImgCell: React.FC<IProps> = ({ prop, row, idx, alt }) => {
  return (
    <div
      className={'custom w-full flex justify-center items-center bg-green-200 border-t-2 border-b-2  border-white px-2 py-1  '}
      key={idx}>
      <img className="max-w-img-content h-auto" src={row[prop]} alt={row[alt]} />
    </div>
  );
};

export default ImgCell;
