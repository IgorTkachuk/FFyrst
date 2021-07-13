import React, { useEffect } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { ILogin, loginSchema } from 'shared';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { loginUserAction } from '../../../store/slices/user/user.slice';
import { NavLink } from 'react-router-dom';

const Login: React.FC = () => {
  const { loading, error } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div className='container mx-auto h-screen flex justify-center items-center'>
      <div className='w-full max-w-xs'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values, { resetForm }: FormikHelpers<ILogin>) => {
            dispatch(loginUserAction(values));
              }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
            <form
              onSubmit={handleSubmit}
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            >
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  placeholder='Email'
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <p className='text-red-500 text-xs italic'>
                {touched.email && errors.email}
              </p>
              <div className='mb-6'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  className={`shadow appearance-none border ${errors.password ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  id='password'
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className='text-red-500 text-xs italic'>
                  {touched.password && errors.password}
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='submit'
                  disabled={loading}>
                  Sign In
                </button>
                <div className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                  <NavLink to='/refresh'>Forgot Password?</NavLink>
                </div>
              </div>
            </form>
          )}
        </Formik>
        <p className='text-center text-gray-500 text-xs'>
          &copy;2021 Radency. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export { Login };
