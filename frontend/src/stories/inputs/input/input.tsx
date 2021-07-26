import React, { useEffect, useRef, useState } from 'react';
import './input.css';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

interface InputProps {
  id: string;
  title: string;
  type: string,
  disabled?: boolean,
  size?: 'small' | 'medium' | 'big' | 'widthAuto';
  placeholder?: string;
  props?: Record<string, unknown>;
  className?: string;
  field: any;
  meta?: {
    touched: boolean;
    error: string;
  };
  [key: string]: any;
}

export const Input = ({
                        id, title = '', size = 'medium', placeholder = '', className = '',
                        disabled, field, type, meta = { touched: false, error: '' }, ...props
                      }: InputProps) => {

  const [isType, setType] = useState(type);
  const [isActive, setIsActive] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  return (
    <div
      onClick={() => input.current?.focus()}
      className={`flex flex-col w-full ${size === 'small' && 'max-w-small-input'} ${size === 'medium' && 'max-w-medium-input'} ${size === 'big' && 'max-w-big-input'} ${size === 'widthAuto' && 'max-w-max'}`}>
      <div
        className={`border-2 ${(meta.touched && meta.error && !disabled && isActive) ? 'border-custom-red' : (!disabled && isActive) ? 'border-custom-blue' : 'border-custom-gray'}  ${disabled && 'bg-custom-field'}  border- rounded-lg flex flex-col h-10 ${(!field.value || field.value !== 0) && 'justify-center'}`}>
        {(field.value || field.value === 0) &&
        <label className={`ml-1 text-custom-placeholder text-ss px-2`} htmlFor={id}>
          {title}
        </label>}
        <div className='flex items-center space-x-4 px-2'>
          <input
            ref={input}
            className={`ml-1 h-5 border-0 pl-0 focus:ring-0 focus:outline-none ${disabled && 'bg-custom-field'} text-custom-blue text-xs w-full`}
            id={id}
            onFocus={() => {
              console.log('focus');
              setIsActive(true);
            }}
            onBlur={() => {
              console.log('blur');
              setIsActive(false);
            }}
            disabled={disabled}
            type={isType}
            placeholder={placeholder}
            {...props}
            {...field}
          />
          {isType === 'password' && type === 'password' &&
          <BsEyeSlash onClick={() => setType('text')} className={`${field.value && 'mb-2'} text-custom-dark-gary `} />}
          {isType === 'text' && type === 'password' &&
          <BsEye onClick={() => setType('password')} className={`${field.value && 'mb-2'} text-custom-dark-gary `} />}
        </div>
      </div>
      {(meta.touched && meta.error && !disabled) && (
        <div className='text-red-400 text-ss pl-2 py-0.5'>{meta.error}</div>)}
    </div>
  );
};
