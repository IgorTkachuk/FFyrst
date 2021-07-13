import React, { useEffect } from 'react';
import { Form, Formik, FormikHelpers, FormikProps, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { ILogin, loginSchema } from 'shared';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { loginUserAction } from '../../../store/slices/user/user.slice';
import { NavLink } from 'react-router-dom';
import { Input } from '../../../stories/inputs/input/input';
import { Button } from '../../../stories/controls/button/Button';
import ErrorBoundary from '../../../components/errorBoundry/errorBoundry';

const Login: React.FC = () => {
  const { loading, error } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();

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
          {(props: FormikProps<any>) => (
            <Form
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            >
              {error && <ErrorBoundary message={error} />}
              <Field name='email'>
                {({ field, meta }: any) => (
                  <Input id='email' title='Email' type='text' meta={meta} field={field} />
                )}
              </Field>
              <Field name='password'>
                {({ field, meta }: any) => (
                  <Input id='password' title='Password' type='password' meta={meta} field={field} />
                )}
              </Field>
              <div className='flex items-center justify-between mt-4'>
                <Button color='blue' label='Sign in' type={'submit'} disable={loading} />
                <div className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                  <NavLink to='/refresh'>Forgot Password?</NavLink>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <p className='text-center text-gray-500 text-xs'>
          &copy;2021 Radency. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export {Login};

