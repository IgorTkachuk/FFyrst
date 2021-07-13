import React from 'react';
import './checkbox.css';

interface ButtonProps {
  boxColor?: 'blue' | 'red' | 'green' | 'black';
  textColor?: 'blue' | 'red' | 'green' | 'black';
  boxSize?: 'small' | 'medium' | 'big' | 'large';
  textSize?: 'small' | 'medium' | 'big' | 'large';
  rounded?: boolean;
  checked?: boolean;
  label?: string;
  onChange?: () => void;
  props?: Record<string, unknown>;
}

const BOX_SIZES = {
  small: 'h-3 w-3 mr-2',
  medium: 'h-4 w-4 mr-2.5',
  big: 'h-6 w-6 mr-4',
  large: 'h-8 w-8 mr-5',
};
const BOX_COLORS = {
  blue: 'text-blue',
  red: 'text-red',
  green: 'text-green',
  black: 'text-black',
};
const TEXT_SIZES = {
  small: 'text-sm',
  medium: 'text-lg',
  big: 'text-2xl',
  large: 'text-4xl',
};
const TEXT_COLORS = {
  blue: 'text-blue',
  red: 'text-red',
  green: 'text-green',
  black: 'text-black',
};

export const CheckBox = ({
  boxColor = 'blue',
  textColor = 'black',
  boxSize = 'medium',
  textSize = 'medium',
  label = '',
  rounded = false,
  checked = true,
  ...props
}: ButtonProps) => {
  return (
    <label className={`inline-flex items-center`}>
      <input
        type="checkbox"
        className={`cursor-pointer rounded ${
          rounded && 'rounded-full'
        } focus:ring-transparent ${BOX_SIZES[boxSize]} ${
          BOX_COLORS[boxColor] + '-400'
        } hover:${BOX_COLORS[boxColor] + '-500'}`}
        defaultChecked={checked}
        {...props}
      />
      <span
        className={`cursor-pointer ${TEXT_SIZES[textSize]} ${
          TEXT_COLORS[textColor] + '-400'
        }`}
      >
        {label}
      </span>
    </label>
  );
};
