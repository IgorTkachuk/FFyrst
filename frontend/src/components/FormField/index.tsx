import React from 'react';
import { Field, FieldProps } from 'formik';

interface IFormField {
  id: string;
  label: string;
  placeholder: string;
  form: any;
  type?: string;
}

const FormField: React.FC<IFormField> = (props) => {
  const { id, label, placeholder, form } = props;
  return (
    <>
      <div className="mt-6 xs:mt-3 sm:mt-5 md:mt-6 lg:mt-6 flex items-center flex-col justify-between">
        <div className="w-96 flex items-center justify-between ">
          <label
            className="text-left text-md text-gray-700 font-bold"
            htmlFor={id}
          >
            {label}
          </label>
          <Field
            className={`w-60 sm:w-56 md:w-50 lg:w-50 px-4 py-2 rounded-md bg-blue-50 focus:outline-none focus:ring-1`}
            id={id}
            name={id}
            placeholder={placeholder}
            type={props?.type}
          />
        </div>
        {form.errors[id] && form.touched[id] && (
          <div className="w-full mt-1.5 text-center rounded-md bg-red-50 ">
            <label className="text-red-400 text-md italic font-medium">
              {form.errors[id]}
            </label>
          </div>
        )}
      </div>
    </>
  );
};
export default FormField;
