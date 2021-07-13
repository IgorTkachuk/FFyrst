import React, {useEffect, useState} from 'react';
import './select.css';
import { Multiselect } from 'multiselect-react-dropdown';

interface SelectProps {
  id: string;
  title: string;
  isMulti: boolean;
  options?: Array<any> | [];
}

export const Select = ({
  id,
  title = '',
  isMulti = false,
  options = []
}: SelectProps) => {

  const [currentData, setCurrentData] = useState<Array<any>>([]);

  useEffect(() => {
    setCurrentData(options);
  }, [options]);


  const onSelect = (list: Array<any>, item = {}) => {
    if(isMulti){
      return;
    }
    list.splice(0, list.length);
    list.push(item);
  }

  return (
    <div className="flex flex-col">
      {title}
      <Multiselect
        id={id}
        options={currentData}
        onSelect={onSelect}
        displayValue="name"
      />
    </div>
  );
};
