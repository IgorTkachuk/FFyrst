import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { AppRoute } from 'common/enums';
import { Link } from 'components/common';
import { signUpUserAction } from '../../../store/slices/auth/auth.slice';
import { SignUpSchema } from './common/validations';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ErrorBoundary from '../../../components/errorBoundry/errorBoundry';
import { Input } from '../../../stories/inputs/input/input';
import { Button } from '../../../stories/controls/button/Button';

const Registration: React.FC = () => {
  const { loading, error, registerState } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();
  interface dataInterface {
    [key: string]: string;
  }

  return (
    <>
      <div className='container mx-auto h-screen flex items-center justify-center'>
        <div className='w-full max-w-md'>
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
              const dataTrim: dataInterface = data;
              Object.keys(dataTrim).forEach(key => {
                dataTrim[key]=dataTrim[key].trim();
              })
              dispatch(signUpUserAction(dataTrim));
            }}
          >
            {(form) => (
              <Form
                className='form-box flex flex-col space-y-4'>
                {error && <ErrorBoundary message={error} />}
                {registerState && <p className='font-semibold text-blue-500'>Message was sent to email</p>}
                <Field name='firstName'>
                  {({ field, meta }: any) => (
                    <Input id='firstName' title='First name' type='text' placeholder={'First name'} meta={meta} field={field} />
                  )}
                </Field>
                <Field name='lastName'>
                  {({ field, meta }: any) => (
                    <Input id='lastName' title='Last name' type='text' placeholder={'Last name'} meta={meta} field={field} />
                  )}
                </Field>
                <Field name='email'>
                  {({ field, meta }: any) => (
                    <Input id='email' title='Email' type='email' placeholder={'Email'} meta={meta} field={field} />
                  )}
                </Field>
                <Field name='phoneNumber'>
                  {({ field, meta }: any) => (
                    <Input id='phoneNumber' title='Phone' type='text' placeholder={'Phone'} meta={meta} field={field} />
                  )}
                </Field>
                <Field name='password'>
                  {({ field, meta }: any) => (
                    <Input id='password' title='Password' type='password' placeholder={'Password'} meta={meta} field={field} />
                  )}
                </Field>
                <Field name='confirmPassword'>
                  {({ field, meta }: any) => (
                    <Input id='confirmPassword' title='Confirm password' type='password' placeholder={'Confirm password'} meta={meta} field={field} />
                  )}
                </Field>
                <div className='h-20 mt-6 flex justify-between items-center'>
                  <Button like={'primary'} label='Sign up' type={'submit'} disabled={loading} />
                  <div className='cursor-pointer text-center text-blue-500 font-bold hover:text-blue-700'>
                    <Link to={AppRoute.SIGN_IN}>Sign In</Link>
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
    </>
  );
};

export { Registration };
