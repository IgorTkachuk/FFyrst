import React, { ReactElement } from 'react';
import mockAvatar from './mock-avatar.jpg';
import iconEdit from './icon-edit.svg';
import { Button } from '../../../stories/controls/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../common/types';
import { Form, Formik, FormikHelpers, FormikProps, Field } from 'formik';
import { Input } from '../../../stories/inputs/input/input';
import { IProfile } from 'shared';
import './_style.scss';
import { updateUserAction } from '../../../store/slices/user-data/user-data.slice';
import { userProfileShema } from '../common/validation';

const UserProfileDetails = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userData.user);
  const token = useSelector((state: RootState) => state.user.accessToken);

  return (
    <div
      className='container shadow-2xl border-t-2 rounded-3xl mx-auto mt-8 flex flex-col justify-start items-center p-8 pl-14 pt-14 min-h-screen mt-2'>
      <div className='w-10/12 md:w-8/12 flex flex-col'>
        <div className='font-roboto text-5xl font-semibold'>Profile</div>
        <div className=' self-center md:self-start mt-8 ml-4 relative w-48 md:w-60'>
          <img
            className='w-48 md:w-60 rounded-full'
            src={mockAvatar}
            alt='user avatar'
          />
          <div
            className='bg-red-500 w-9 h-9 md:w-12 md:h-12 rounded-full flex justify-center items-center absolute inset-3/4 cursor-pointer transform hover:scale-105 active:scale-100'>
            <img
              className='w-6 md:w-8'
              src={iconEdit}
              alt='icon-edit'
              style={{ fill: 'red' }}
            />
          </div>
        </div>
      </div>
      <Formik
        initialValues={user}
        validationSchema={userProfileShema}
        onSubmit={(user, { resetForm }: FormikHelpers<IProfile>) => {
          dispatch(updateUserAction({ user, token: token || '' }));
        }}
      >
        {(props: FormikProps<any>) => (
          <Form className='ml-4 mr-4 mt-12 flex flex-col self-center w-10/12 md:w-8/12'>
            <div className=' flex flex-col md:flex-row justify-between w-full'>
              <div className='flex flex-col profile__input-block'>
                <Field name='firstName'>
                  {({ field, meta }: any) => (
                    <Input
                      id='firstName'
                      title='First name'
                      type='text'
                      meta={meta}
                      field={field}
                      size={'widthAuto'}
                      placeholder='First name'
                    />
                  )}
                </Field>
              </div>
              <div className='flex flex-col profile__input-block mt-4 md:mt-0'>
                <Field name='lastName'>
                  {({ field, meta }: any) => (
                    <Input
                      id='lastName'
                      title='Last name'
                      type='text'
                      meta={meta}
                      field={field}
                      size={'widthAuto'}
                      placeholder='Last name'
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className=' flex flex-col md:flex-row justify-between w-full mt-4 md:mt-10'>
              <div className='flex flex-col profile__input-block'>
                <Field name='birthDate'>
                  {({ field, meta }: any) => (
                    <Input
                      id='birthDate'
                      title='Birth date'
                      placeholder='Birth date'
                      type='date'
                      meta={meta}
                      field={field}
                      size={'widthAuto'}
                      className={'cursor-pointer'}
                    />
                  )}
                </Field>
              </div>
              <div className='flex flex-col profile__input-block mt-4 md:mt-0'>
                <Field name='phoneNumber'>
                  {({ field, meta }: any) => (
                    <Input
                      id='phoneNumber'
                      title='Phone number'
                      type='text'
                      meta={meta}
                      field={field}
                      size={'widthAuto'}
                      placeholder='Phone number'
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className='flex flex-col w-full mt-4 md:mt-10'>
              <Field name='email'>
                {({ field, meta }: any) => (
                  <Input
                    id='email'
                    title='Email'
                    type='text'
                    meta={meta}
                    field={field}
                    size={'widthAuto'}
                    placeholder='youremail@gmail.com'
                  />
                )}
              </Field>
            </div>
            <div className='w-full flex justify-center md:justify-end mt-10'>
              <Button
                like={'primary'}
                label='Update profile'
                type={'submit'}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { UserProfileDetails };
