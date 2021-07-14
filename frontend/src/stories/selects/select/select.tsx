import React, { useEffect, useState } from 'react';
import './select.css';
import { Multiselect } from 'multiselect-react-dropdown';

interface SelectProps {
  id: string,
  title: string,
  singleSelect: boolean,
  options?: Array<{ name: string, id: string }> | []
}

export const Select = ({ id, title = '', singleSelect = false, options = [] }: SelectProps) : JSX.Element => {
  const [currentData, setCurrentData] = useState<Array<{name: string, id: string}>>([]);
  useEffect(() => {
    setCurrentData(options);
  }, [options]);
  return (
    <div className="flex flex-col">
      {title}
      {singleSelect ? (
        <Multiselect
          id = {id}
          options = {currentData}
          displayValue = "name"
          showArrow = {true}
          singleSelect = {true}
        />
      ) : (
        <Multiselect
          id = {id}
          options = {currentData}
          displayValue = "name"
          closeIcon = {"cancel"}
        />
      )}
    </div>
  );
};
