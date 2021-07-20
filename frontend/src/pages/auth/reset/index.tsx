import React, { useEffect } from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field } from 'formik';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { resetSchema } from 'shared';
import { resetPasswordAction, UserActionCreator } from '../../../store/slices/user/user.slice';
import { NavLink } from 'react-router-dom';
import { Input } from '../../../stories/inputs/input/input';
import { Button } from '../../../stories/controls/button/Button';
import ErrorBoundary from '../../../components/errorBoundry/errorBoundry';

const Reset = () => {
  const { loading, error, resetState } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActionCreator.clearError());
  }, []);

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
          {(props: FormikProps<any>,
          ) => (
            <Form
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            >
              {error && <ErrorBoundary message={error} />}
              {resetState && <p className='font-semibold text-blue-500'>Message was sent to email</p>}
              <Field name='email'>
                {({ field, meta }: any) => (
                  <Input id='email' title='Email' type='text' meta={meta} field={field} />
                )}
              </Field>
              <div className='flex items-center justify-between mt-4'>
                <Button color='blue' label='Send' type={'submit'} disabled={loading} />
                <div className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                  <NavLink to='/login'>Back to Login</NavLink>
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

export { Reset };
