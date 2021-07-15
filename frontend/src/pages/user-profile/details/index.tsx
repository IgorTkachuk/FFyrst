import React, { ReactElement } from 'react';
import mockAvatar from './mock-avatar.jpg';
import iconEdit from './icon-edit.svg';
import { Button } from '../../../stories/controls/button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/types';
import { Form, Formik, FormikHelpers, FormikProps, Field } from 'formik';
import { Input } from '../../../stories/inputs/input/input';
import { IProfile } from 'shared';

const UserProfileDetails = (): ReactElement => {
  const user = useSelector((state: RootState) => state.userData.user);

  return (
    <div className="container shadow-2xl border-t-2 rounded-3xl mx-auto w-full max-w-6xl w-4/5 mt-8 flex flex-col justify-start items-center p-8 pl-14 pt-14 min-h-screen">
      <div className="w-8/12">
        <div className="font-roboto text-5xl self-start font-semibold">
          Profile
        </div>
        <div className="self-start mt-8 ml-4 relative w-60">
          <img
            className="w-60 rounded-full"
            src={mockAvatar}
            alt="user avatar"
          />
          <div className="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center absolute inset-3/4 cursor-pointer transform hover:scale-105 active:scale-100">
            <img
              className="w-8"
              src={iconEdit}
              alt="icon-edit"
              style={{ fill: 'red' }}
            />
          </div>
        </div>
      </div>
      <Formik
        initialValues={user}
        onSubmit={(values, { resetForm }: FormikHelpers<IProfile>) => {
          // implement update user data
          console.log('test');
        }}
      >
        {(props: FormikProps<any>) => (
          <Form className="ml-4 mr-4 mt-12 flex flex-col self-center w-8/12">
            <div className=" flex justify-between w-full">
              <div className="flex flex-col" style={{ width: '45%' }}>
                <Field name="firstName">
                  {({ field, meta }: any) => (
                    <Input
                      id="firstName"
                      title="First name"
                      type="text"
                      meta={meta}
                      field={field}
                      size={'widthAuto'}
                    />
                  )}
                </Field>
              </div>
              <div className="flex flex-col" style={{ width: '47%' }}>
                <Field name="lastName">
                  {({ field, meta }: any) => (
                    <Input
                      id="lastName"
                      title="Last name"
                      type="text"
                      meta={meta}
                      field={field}
                      size={'widthAuto'}
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className=" flex justify-between w-full mt-10">
              <div className="flex flex-col" style={{ width: '45%' }}>
                <Field name="birthDate">
                  {({ field, meta }: any) => (
                    <Input
                      id="birthDate"
                      title="Birth date"
                      placeholder="Birth date"
                      type="text"
                      meta={meta}
                      field={field}
                      size={'widthAuto'}
                    />
                  )}
                </Field>
              </div>
              <div className="flex flex-col" style={{ width: '47%' }}>
                <Field name="phoneNumber">
                  {({ field, meta }: any) => (
                    <Input
                      id="phoneNumber"
                      title="Phone number"
                      type="text"
                      meta={meta}
                      field={field}
                      size={'widthAuto'}
                      placeholder="Phone number"
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="flex flex-col w-full mt-10">
              <Field name="email">
                {({ field, meta }: any) => (
                  <Input
                    id="email"
                    title="Email"
                    type="text"
                    meta={meta}
                    field={field}
                    size={'widthAuto'}
                    placeholder="youremail@gmail.com"
                  />
                )}
              </Field>
            </div>
            <div className="w-full flex justify-end mt-10">
              <Button color={'blue'} label="Update profile" size={'big'} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { UserProfileDetails };
