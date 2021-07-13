import React, { useEffect } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { resetSchema } from 'shared';
import { resetPasswordAction } from '../../../store/slices/user/user.slice';
import { NavLink } from 'react-router-dom';

const Refresh = () => {
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
          initialValues={{ email: '' }}
          validationSchema={resetSchema}
          onSubmit={(values, { resetForm }: FormikHelpers<{ email: string }>) => {
            dispatch(resetPasswordAction(values));
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
              <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='submit'
                  disabled={loading}
                >
                  Send
                </button>
                <div className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                  <NavLink to='/login'>Back to Login</NavLink>
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

export { Refresh };
