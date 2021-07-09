import React from 'react';
import './input.css';

interface InputProps {
  size?: 'small' | 'medium' | 'big' | 'widthAuto';
  placeholder?: string;
  type: string;
  props?: Record<string, unknown>;
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
  ...props
}: InputProps) => {
  return (
    <input
      className={`${INPUT_SIZES[size]} shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};
