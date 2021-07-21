import React, { useEffect, useState } from 'react';
import './select.css';
import { Multiselect } from 'multiselect-react-dropdown';

interface SelectProps {
  placeholder: string,
  title: string,
  singleSelect: boolean,
  options?: Array<{ name: string, id: string }> | []
  callback?: (val: string) => void
}

export const Select = ({ placeholder, title = '', singleSelect = false, options = [], callback, }: SelectProps): JSX.Element => {
  return (
    <div className='flex flex-col max-w-select-content'>
      {title}
      {singleSelect ? (
        <Multiselect
          onSelect={callback}
          options={options}
          displayValue='name'
          showArrow={true}
          singleSelect={true}
        />
      ) : (
        <Multiselect
          placeholder={placeholder}
          onSelect={callback}
          options={options}
          displayValue='name'
          closeIcon={'cancel'}
        />
      )}
    </div>
  );
};
