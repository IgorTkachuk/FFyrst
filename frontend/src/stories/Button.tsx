import React from 'react';
import './button.css';

interface ButtonProps {
  color: 'blue' | 'red' | 'green';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const BTN_COLORS = {
  blue: '#666',
  red:  '#888',
  green: '#123'
}

export const Button = ({
  size = 'medium',
  color,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`].join(' ')}
      style={{ backgroundColor: BTN_COLORS[color] }}
      {...props}
    >
      {label}
    </button>
  );
};
