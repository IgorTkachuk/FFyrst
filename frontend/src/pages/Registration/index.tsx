import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { SignUpActionCreator } from 'store/slices';
import { FormField } from 'components';
import { SignUpSchema } from './common/validations';

// its will be better if I take out this schema in shared ???

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
        validationSchema={SignUpSchema}
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
