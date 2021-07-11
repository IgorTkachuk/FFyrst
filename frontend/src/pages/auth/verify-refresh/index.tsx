import React, { useEffect } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { Formik, FormikHelpers } from 'formik';
import { IVerPassword, verifySchema } from 'shared';
import { verifyPasswordAction } from '../../../store/slices/user/user.slice';

interface IParams {
  token: string
}

const VerifyRefresh = () => {
  const { token } = useParams<IParams>();
  const history = useHistory();
  const { loading, error, verifySucceed } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (verifySucceed) {
      history.push('/login');
    }
  }, [error, verifySucceed]);

  return (
    <div className='container mx-auto h-screen flex justify-center items-center'>
      <div className='w-full max-w-xs'>
        <Formik
          initialValues={{ verifiedPassword: '', password: '', token }}
          validationSchema={verifySchema}
          onSubmit={(values, { resetForm }: FormikHelpers<IVerPassword>) => {
            console.log(values);
            dispatch(verifyPasswordAction(values));
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
              <div className='mb-6'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  className={`shadow appearance-none border ${errors.password && touched.password ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
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
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Repeat password
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='verifiedPassword'
                  placeholder='Repeat password'
                  type='text'
                  name='verifiedPassword'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.verifiedPassword}
                />
              </div>
              <p className='text-red-500 text-xs italic'>
                {touched.verifiedPassword && errors.verifiedPassword}
              </p>

              <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='submit'
                  disabled={loading}>
                  Change password
                </button>
                <div className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                  <NavLink to='/login'>Back to login</NavLink>
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

export default VerifyRefresh;
