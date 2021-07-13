import React from 'react';

interface IProps {
  message: string
}

const ErrorBoundary: React.FC<IProps> = ({ message }) => {
  return (
    <p className={'text-red-500 mx-4 my-4 font-semibold'}>
      {message}
    </p>
  );
};

export default ErrorBoundary;
