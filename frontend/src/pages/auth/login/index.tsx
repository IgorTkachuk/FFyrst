import React, { useEffect } from 'react';
import { Form, Formik, FormikHelpers, FormikProps, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { ILogin, loginSchema } from 'shared';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { loginUserAction, UserActionCreator } from '../../../store/slices/auth/auth.slice';
import { NavLink } from 'react-router-dom';
import { Input } from '../../../stories/inputs/input/input';
import { Button } from '../../../stories/controls/button/Button';
import ErrorBoundary from '../../../components/errorBoundry/errorBoundry';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../../common/enums';
import App from '../../../app';

const Login: React.FC = () => {
  const { loading, error } = useTypedSelector(state => state.user);
  const { tenant } = useTypedSelector(state => state.tenant);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(UserActionCreator.clearError());
  }, []);

  return (
    <div className='container mx-auto h-screen flex justify-center items-center'>
      <div className='w-full max-w-md'>
        <div className="form-header flex justify-center items-center">
          <div className="logo w-10 h-10 sm:w-20 sm:h-20 md:w-32 md:h-32">
            { tenant.logoURL && <img src={tenant.logoURL} className='mb-8'/> }
          </div>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values, { resetForm }: FormikHelpers<ILogin>) => {
            dispatch(loginUserAction(values));
          }}
        >
          {(props: FormikProps<any>) => (
            <Form
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center space-y-4 '
            >
              {error && <ErrorBoundary message={error} />}
              <Field name='email'>
                {({ field, meta }: any) => (
                  <Input id='email' title='Email' type='text' meta={meta} field={field} placeholder={'Email'} />
                )}
              </Field>
              <Field name='password'>
                {({ field, meta }: any) => (
                  <Input id='password' title='Password' type='password' meta={meta} field={field} placeholder={'Password'} />
                )}
              </Field>
              <div className='flex items-center justify-between mt-4'>
                <Button like={'primary'} label='Sign in' type={'submit'} disabled={loading} />
                <div className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                  <NavLink to={AppRoute.REFRESH}>Forgot Password?</NavLink>
                </div>
              </div>
              <hr className='my-1 h-1' />
              <Button like={'secondary'} label='Create account' onClick={() => history.push(AppRoute.SIGN_UP)} />
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

export { Login };

