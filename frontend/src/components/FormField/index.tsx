import React from 'react';
import { Field } from 'formik';

const FormField = (props: any) => {
  const { id, label, placeholder, form } = props;
  return (
    <>
      <div className="mt-6 sm:mt-5 md:mt-6 lg:mt-6 flex items-center flex-col justify-between">
        <div className="w-96 flex items-center justify-between ">
          <label className="w-40 text-left text-lg" htmlFor={id}>
            {label}
          </label>
          <Field
            className={`w-48 sm:w-60 md:w-48 lg:w-48 px-4 py-2 rounded-md bg-blue-200 focus:outline-none  ${
              form.errors[id] && form.touched[id]
                ? 'text-red-600 focus:ring-red-400 focus:ring-2 '
                : 'text-green-600 focus:ring-green-400 focus:ring-2 '
            }`}
            id={id}
            name={id}
            placeholder={placeholder}
            {...props}
          />
        </div>
        {form.errors[id] && form.touched[id] && (
          <div className="w-full mt-1.5 rounded-md bg-red-200 text-red-500 text-lg italic">
            <label className="text-red-600">{form.errors[id]}</label>
          </div>
        )}
      </div>
    </>
  );
};

export default FormField;
