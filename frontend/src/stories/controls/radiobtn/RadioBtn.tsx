import React from 'react';
import './radiobtn.css';

interface RadioBtnProps {
  id: string;
  checked: boolean,
  title: string;
  disabled?: boolean,
  value: string | boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  props?: Record<string, unknown>;
  field: any;
  meta?: {
    touched: boolean;
    error: string;
  };
}

export const RadioBtn = ({ checked = false, id, title, value, field, disabled = false, ...props }: RadioBtnProps) => {
  return (
    <div
      className={`${field.value === value ? 'border-custom-blue' : 'border-custom-gray'} flex max-w-small-input  border-2 rounded-lg h-10 items-center `}>
      <label
        className={`ml-4 flex order-2 text-custom-blue`}
        htmlFor={id}>
        {title}
      </label>
      {checked}
      <input
        className={`ml-2 flex order-1 focus:outline-none border-custom-gray focus:ring-0 mt-1 text-custom-blue active:text-custom-dark-blue`}
        id={id} type='radio' disabled={disabled}
        checked={field.value === value} onChange={()=>field.onChange(field.value)} {...field} {...props} />
    </div>
  );
};
