import React from 'react';

interface IOption {
  value: string,
  title: string
}

interface IProps {
  options: IOption[],
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  defaultValue: number
}

const CustomSelectForPagination = ({ defaultValue, onChange, options }: IProps) => {
  return (<select className='border-0 rounded focus:outline-non focus:ring-2 focus:ring-gray-50 focus:ring'
                  onChange={onChange}
                  defaultValue={defaultValue}>
      {options.map(el => <option key={el.title} value={el.value}>{el.title}</option>)}
    </select>
  );
};

export default CustomSelectForPagination;
