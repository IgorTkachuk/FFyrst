import React from 'react';
import './input.css';

interface InputProps {
  size?: 'small' | 'medium' | 'big' | 'widthAuto';
  placeholder?: string;
  type: string;
  props?: Record<string, unknown>;
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
  size = 'medium',
  placeholder = '',
  type = 'text',
  meta = { touched: false, error: '' },
  ...props
}: InputProps) => {
  return (
    <div>
      <input
        className={`${INPUT_SIZES[size]} ${
          meta.touched && meta.error
            ? 'bg-red-100 focus:border-red-300'
            : 'focus:border-blue-300'
        } shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none `}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="w-full text-red-400 text-sm py-0.5">{meta.error}</div>
      ) : (
        ''
      )}
    </div>
  );
};
