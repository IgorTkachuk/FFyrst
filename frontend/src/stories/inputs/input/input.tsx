import React from 'react';
import './input.css';

interface InputProps {
  id: string;
  title: string;
  size?: 'small' | 'medium' | 'big' | 'widthAuto';
  placeholder?: string;
  type: string;
  props?: Record<string, unknown>;
  className?: string;
  field: any;
  meta?: {
    touched: boolean;
    error: string;
  };
}

const INPUT_SIZES = {
  small: 'text-sm w-40',
  medium: 'text-lg w-60',
  big: 'text-2xl w-80',
  widthAuto: 'text-lg w-full',
};

export const Input = ({
  id,
  title = '',
  size = 'medium',
  placeholder = '',
  type = 'text',
  className = '',
  field,
  meta = { touched: false, error: '' },
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label
        className={`${INPUT_SIZES[size]} font-bold py-0.5 px-0.5`}
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className={`${INPUT_SIZES[size]} ${
          meta.touched && meta.error
            ? 'bg-red-100 focus:border-red-300'
            : 'focus:border-blue-300'
        } shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="w-full text-red-400 text-sm py-0.5">{meta.error}</div>
      ) : (
        ''
      )}
    </div>
  );
};
