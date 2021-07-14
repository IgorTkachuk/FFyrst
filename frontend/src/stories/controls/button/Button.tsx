import React from 'react';
import './button.css';

interface ButtonProps {
  color: 'blue' | 'red' | 'green';
  size?: 'small' | 'medium' | 'big';
  label?: string;
  onClick?: () => void;

  [key: string]: any
}

const BTN_COLORS = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
};

const BTN_COLORS_ON_HOVER = {
  blue: 'bg-blue-400',
  red: 'bg-red-400',
  green: 'bg-green-400',
};

const BTN_SIZES = {
  small: 'text-sm',
  medium: 'text-lg',
  big: 'text-2xl',
};

export const Button = ({ size = 'medium', color = 'green', label = '', ...props }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`${BTN_COLORS[color]} ${BTN_SIZES[size]} ${props.disabled ? 'bg-opacity-70' : ''} transform active:scale-95 font-roboto  text-white font-bold py-2 px-4 rounded active:  hover:${BTN_COLORS_ON_HOVER[color]}`}
      {...props}
    >
      {label}
    </button>
  );
};
