import React, { ReactNode } from 'react';
import './button.css';

type BtnStyle = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps {
  like: BtnStyle,
  label?: string;
  icon?: ReactNode | HTMLAllCollection | string,
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;

  [key: string]: any;
}

export const Button = ({ like = 'secondary', label = '', type = 'button', icon, ...props }: ButtonProps) => {
    return (
      <button
        type={type}
        className={`h-10 rounded-md max-w-btn-content w-full hover:shadow-md transition duration-200 flex place-content-center items-center
          ${like === 'primary' && 'text-custom-white bg-custom-blue active:bg-custom-dark-blue focus:outline-none focus:ring-0 border-0'}
          ${like === 'secondary' && `text-custom-blue bg-custom-background active:bg-custom-background focus:outline-none focus:ring-0 border-custom-blue border-2 active:border-custom-dark-blue active:text-custom-dark-blue `}' +
          ${like === 'tertiary' && 'text-custom-blue focus:outline-none focus:ring-0 border-0 '} `}
        {...props}>
        {icon} {label}
      </button>
    );
  }
;
