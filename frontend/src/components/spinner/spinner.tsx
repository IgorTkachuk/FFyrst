import React, { ReactElement } from 'react';
import './Spinner.css';

interface SpinnerProps {
  size: number;
}

const Spinner = ({ size }: SpinnerProps): ReactElement => {
  return (
    <div className={`spinner w-${size} h-${size}`}></div>
  )
}

export { Spinner };
