import React, { ReactElement, useEffect, useState } from 'react';
import ReactSelect, { Props } from 'react-select';
import { FormikProps, FormikValues } from 'formik';


interface ISelectProps extends Props {
  id: string,
  title: string,
  options: { value: string, label: string }[],
  field: any;
  meta?: {
    touched: boolean;
    error: string;
  };
  props?: FormikProps<FormikValues>;
}

const Select = ({
  id,
  title = '',
  options,
  field,
  meta,
  props,
  ...rest
  }: ISelectProps) : ReactElement => {
  return (
    <div className="flex flex-col">
      <label
        className={'text-lg font-bold py-0.5 px-0.5'}
        htmlFor={id}
      >
        {title}
      </label>
      <ReactSelect
        options={options}
        onChange={(item) => {
          item && props?.setFieldValue(field.name, item.value)
        }}
        isSearchable={false}
        {...rest}
      />
      <input type='hidden' id={id} {...field} />
      {meta?.touched && meta.error && (
        <div className="w-full text-red-400 text-sm py-0.5">{meta.error}</div>
      )}
    </div>
  );
};

export { Select }
