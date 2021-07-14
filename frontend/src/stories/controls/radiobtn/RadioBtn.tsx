import React from 'react';
import './radiobtn.css';
interface RadioBtnProps {
  boxColor?: 'blue' | 'red' | 'green' | 'black';
  textColor?: 'blue' | 'red' | 'green' | 'black';
  boxSize?: 'small' | 'medium' | 'big' | 'large';
  textSize?: 'small' | 'medium' | 'big' | 'large';
  rounded?: boolean;
  disabled?: boolean;
  isSelected?: boolean;
  value?: string;
  label: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

export const RadioBtn = ({
  boxColor = 'blue',
  textColor = 'black',
  boxSize = 'medium',
  textSize = 'medium',
  label = '',
  value = '',
  rounded = true,
  isSelected = true,
  disabled = false,
  ...props
}: RadioBtnProps) => {
  const boxClass: string =
    'cursor-pointer rounded focus:ring-transparent ' +
    (disabled ? 'opacity-60 bg-gray-300 ' : ' ') +
    (rounded ? 'rounded-full ' : 'rounded-none') +
    `${BOX_SIZES[boxSize]} ${BOX_COLORS[boxColor] + '-400 '}
    hover:${BOX_COLORS[boxColor] + '-500 '}`;

  return (
    <label className={`inline-flex items-center`}>
      <input
        type="radio"
        value={label}
        disabled={disabled}
        checked={isSelected}
        onChange={props.onChange}
        className={boxClass}
        {...props}
      />
      <span
        className={`cursor-pointer select-none ${
          disabled
            ? 'opacity-60 text-gray-400 '
            : TEXT_COLORS[textColor] + '-400'
        } ${TEXT_SIZES[textSize]} ${disabled && 'opacity-30 text-gray-500'}`}
      >
        {label}
      </span>
    </label>
  );
};
