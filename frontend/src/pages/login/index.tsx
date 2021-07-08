import * as React from 'react';
import { Formik } from 'formik';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { UserActionCreator } from 'store/slices';

import LoginSchema from './common/validation';

const Login: React.FC = () => {
  const { email, password } = useSelector(({ user }: RootState) => ({
    email: user.email,
    password: user.password,
  }));
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <Formik
          initialValues={{ email, password }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(UserActionCreator.set(values));
            dispatch(UserActionCreator.login(values));
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <p className="text-red-500 text-xs italic">
                {errors.email && touched.email && errors.email}
              </p>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  placeholder="******************"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className="text-red-500 text-xs italic">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          )}
        </Formik>
        <p className="text-center text-gray-500 text-xs">
          &copy;2021 Radency. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
