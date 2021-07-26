import React, { useRef } from 'react';

interface IRadioBtn {
  id: string,
  label: string,
  value: string | boolean,
}

interface RadioBtnProps {
  title: string,
  btns: IRadioBtn[];
  form: any;
  field: any;
  meta?: {
    touched: boolean;
    error: string;
  };
}

export const RadioBtnGroup = ({ title, btns, meta, form, field }: RadioBtnProps) => {
  return (
    <>
      <p className='text-custom-blue'>{title}</p>
      <div className='flex space-x-2'>
        {btns.map((el, idx) => <RBtn key={idx} values={el} form={form} field={field} />)}
      </div>
      <input type='hidden' {...field} />
      {meta?.touched && meta.error && (
        <div className='w-full text-red-400 text-sm py-0.5'>{meta.error}</div>
      )}
    </>
  );
};

const RBtn = ({ values, field, form }: any) => {
  const ref = useRef<HTMLInputElement>(null);
  const click = () => ref.current && ref.current.click()
  return (<div
      onClick={click}
      className={`${field.value === values.value ? 'border-custom-blue' : 'border-custom-gray'} max-w-select-content w-full flex max-w-small-input  border-2 rounded-lg h-10 items-center `}>
      <label
        className={`ml-4 flex order-2 text-custom-blue`}
        htmlFor={values.id}>
        {values.label}
      </label>
      <input
        ref={ref}
        className={`ml-2 flex order-1 focus:outline-none border-custom-gray focus:ring-0 mt-1 text-custom-blue active:text-custom-dark-blue`}
        id={values.id} type='radio'
        name={field.name}
        checked={field.value === values.value}
        onChange={() => form.setFieldValue(field.name, values.value)} />
    </div>
  );
};
