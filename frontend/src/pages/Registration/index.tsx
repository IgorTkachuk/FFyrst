import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

import '../../stories/button.css';
import { SignUpActionCreator } from 'store/slices';

// make a separate component
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

// its will be better if I take out this schema in shared ???
const validRegSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phoneNumber: Yup.string()
    .phone('', false, 'Phone Number is invalid')
    .required('Phone Number is required'),
  password: Yup.string()
    //working fine
    // .matches(
    //   /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
    //   'Password Must Contain at least 6 Characters, One Uppercase, One Number, and One Special Character',
    // )
    .min(6, 'Password Must Contain 6 Characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Registration = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validRegSchema}
        onSubmit={(data) => {
          dispatch(SignUpActionCreator.reg(data));
        }}
        render={(form) => (
          <Form className="mt-4 flex items-center justify-center">
            <div className="w-4/5 sm:w-4/5 md:w-3/5 lg:w-2/5 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex flex-col items-center justify-center">
              {/* render field with map */}
              <FormField
                form={form}
                id="firstName"
                label="First Name"
                placeholder="Doe"
              />
              <FormField
                form={form}
                id="lastName"
                label="Last Name"
                placeholder="Jane"
              />
              <FormField
                form={form}
                id="email"
                label="Email"
                placeholder="example@gmail.com"
              />
              <FormField
                form={form}
                id="phoneNumber"
                label="Phone"
                placeholder="+380034534221"
              />
              <FormField
                form={form}
                id="password"
                label="Password"
                placeholder="Pass$123"
                type="password"
              />
              <FormField
                form={form}
                id="confirmPassword"
                label="Confirm Password"
                placeholder="Pass$123"
                type="password"
              />
              <button
                className="my-7 px-8 py-3 rounded-lg bg-green-400 hover:bg-green-500"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </Form>
        )}
      ></Formik>
      <p className="text-center text-gray-500 text-xs">
        &copy;2021 Radency. All rights reserved.
      </p>
    </>
  );
};

export default Registration;
