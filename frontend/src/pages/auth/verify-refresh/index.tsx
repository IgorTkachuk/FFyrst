import React, { useEffect } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { Formik, FormikHelpers, Form, Field } from 'formik';
import { IVerPassword, verifySchema } from 'shared';
import { UserActionCreator, verifyPasswordAction } from '../../../store/slices/user/user.slice';
import { Input } from '../../../stories/inputs/input/input';
import { Button } from '../../../stories/controls/button/Button';
import ErrorBoundary from '../../../components/errorBoundry/errorBoundry';
import { AppRoute } from 'common/enums';

interface IParams {
  token: string;
}

const VerifyRefresh = () => {
  const { token } = useParams<IParams>();
  const history = useHistory();
  const { loading, error, verifySucceed } = useTypedSelector(
    (state) => state.user,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (verifySucceed) {
      history.push(AppRoute.SIGN_IN);
    }
    dispatch(UserActionCreator.clearError());
  }, [verifySucceed]);

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <Formik
          initialValues={{ verifiedPassword: '', password: '', token }}
          validationSchema={verifySchema}
          onSubmit={(values, { resetForm }: FormikHelpers<IVerPassword>) => {
            if (values.verifiedPassword === values.password)
              dispatch(verifyPasswordAction(values));
          }}
        >
          {(props) => (
            <Form
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            >
              {error && <ErrorBoundary message={error} />}
              {(props.values.password !== props.values.verifiedPassword && props.isSubmitting) &&
              <ErrorBoundary message='Don`t match passwords' />}
              <Field name='password'>
                {({ field, meta }: any) => (
                  <Input id='password' title='Password' type='password' meta={meta} field={field} />
                )}
              </Field>
              <Field name='verifiedPassword'>
                {({ field, meta }: any) => (
                  <Input id='verifySucceed' title='Verify password' type='password' meta={meta} field={field} />
                )}
              </Field>
              <div className='flex items-center justify-between mt-4'>
                <Button color='blue' label='Send' type={'submit'} disable={loading} />
                <div className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                  <NavLink to='/login'>Back to login</NavLink>
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
  );
};

export { VerifyRefresh };
