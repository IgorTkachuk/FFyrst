import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { AppRoute } from 'common/enums';
import { Link } from 'components/common';

import { signUpUserAction } from '../../../store/slices/user/user.slice';

import { FormField } from 'components';
import { SignUpSchema } from './common/validations';

const Registration: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
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
              dispatch(signUpUserAction(data));
            }}
          >
            {(form) => (
              <Form className="shadow-sm sm:shadow-lg px-8 pt-6 pb-8 mb-4 rounded-lg flex flex-col items-center justify-center">
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
                  placeholder="********"
                  type="password"
                />
                <FormField
                  form={form}
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="********"
                  type="password"
                />
                <div className="h-20 mt-6 flex flex-col justify-between">
                  <button
                    className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <div className="cursor-pointer text-center text-blue-500 font-bold hover:text-blue-700">
                    <Link to={AppRoute.SIGN_IN}>Sign In</Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <p className="text-center text-gray-500 text-xs">
            &copy;2021 Radency. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export { Registration };
