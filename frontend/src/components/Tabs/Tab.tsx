import React, { ReactElement } from 'react';

interface ITabProps {
  label: string,
  children: ReactElement | HTMLElement | string,
  classList?: string,
}

const Tab = ({ children, classList = '' }: ITabProps): ReactElement => {
  return (
    <div className={classList || 'tab p-2 sm:p-5 bg-white'}>{children}</div>
  )
}

export { Tab }
