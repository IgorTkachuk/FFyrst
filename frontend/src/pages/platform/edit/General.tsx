import { Field, Form, Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';
import React, { useState } from 'react'
import { Button } from 'stories/controls/button/Button';
import { Input } from 'stories/inputs/input/input';
import { Select } from 'stories/selects/select/selectFormik';
import { platformGeneralSchema } from './common/validation';
import { Industries } from 'shared'
import { CheckBox } from 'stories/controls/checkbox/CheckBox';
import { Uploader } from 'components/Uploader';

import iconEdit from 'assets/icons/icon-edit.svg';
import { Spinner } from 'components/Spinner/Spinner';


interface IPlatformGeneral {
  name: string;
}

const platformDetails = {
  name: 'Super Medical',
  domainURL: 'supermedical.fyrst.com',
  supportEmail: 'support@supermedical.com',
  industry: 1,
  phoneNumber: '+380735556677',
  invoiceAddress: 'GA 30309',
  useCred: false,
  credURL: '',
  // logoURL: 'https://image.freepik.com/free-vector/lion-head-logo-mascot_6427-342.jpg',
  logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1280px-Ikea_logo.svg.png'
}

const tempMockIndustries = [
  {
    value: '1',
    label: 'Healthcare'
  },
  {
    value: '2',
    label: 'Driving'
  },
]

const General = () => {
  const platform = platformDetails;
  const options = tempMockIndustries;
  return (
    <Formik
        initialValues={platform}
        validationSchema={platformGeneralSchema}
        onSubmit={(values, { resetForm }: FormikHelpers<IPlatformGeneral>) => {
          // dispatch(updateUserAction({ user, token: token || '' }));
          console.log('values', values);
        }}
      >
        {(props: FormikProps<FormikValues>) => (
          <Form className='ml-4 mr-4 mt-4 flex flex-col self-center text-gray-600'>
            <h2 className='text-2xl border-b pb-1 mb-4'>Main</h2>
            <div className='name w-full mb-4'>
              <Field name='name'>
                {({ field, meta }: any) => (
                  <Input
                    id='name'
                    title='Platform name:'
                    type='text'
                    meta={meta}
                    field={field}
                    size='widthAuto'
                    placeholder='Name'
                  />
                )}
              </Field>
            </div>
            <div className='domainURL w-full mb-4'>
              <Field name='domainURL'>
                {({ field, meta }: any) => (
                  <Input
                    id='domainURL'
                    title='Platform name:'
                    type='disabled'
                    meta={meta}
                    field={field}
                    size='widthAuto'
                    placeholder='Name'
                    disabled={true}
                  />
                )}
              </Field>
            </div>
            <div className='supportEmail w-full mb-4'>
              <Field name='supportEmail'>
                {({ field, meta }: any) => (
                  <Input
                    id='supportEmail'
                    title='Support System Email:'
                    type='text'
                    meta={meta}
                    field={field}
                    size='widthAuto'
                    placeholder='support@company.com'
                  />
                )}
              </Field>
            </div>
            <div className='industry w-full mb-4'>
              <Field name='industry'>
                {({ field, meta }: any) => (
                  <Select
                    id='industry'
                    title='Industry:'
                    options={options}
                    meta={meta}
                    field={field}
                    props={props}
                    defaultValue={options.find(({value}) => value === field.value)}
                  />
                )}
              </Field>
            </div>
            <h2 className='text-2xl border-b pb-1 mb-4'>Contacts</h2>
            <div className='phoneNumber w-full mb-4'>
              <Field name='phoneNumber'>
                {({ field, meta }: any) => (
                  <Input
                    id='phoneNumber'
                    title='Phone number:'
                    type='text'
                    meta={meta}
                    field={field}
                    size='widthAuto'
                    placeholder='+380998887766'
                  />
                )}
              </Field>
            </div>
            <div className='invoiceAddress w-full mb-4'>
              <Field name='invoiceAddress'>
                {({ field, meta }: any) => (
                  <Input
                    id='invoiceAddress'
                    title='Invoice Address:'
                    type='text'
                    meta={meta}
                    field={field}
                    size='widthAuto'
                    placeholder='GA 10101'
                  />
                )}
              </Field>
            </div>
            <h2 className='text-2xl border-b pb-1 mb-4'>Links</h2>
            <div className='useCred w-full mb-4'>
              <Field name='useCred'>
                {({ field, meta }: any) => (
                  <CheckBox
                    id='useCred'
                    field={field}
                    boxColor='blue'
                    textColor='black'
                    boxSize='big'
                    textSize='medium'
                    label='Use Credentialing platform'
                    rounded={false}
                    checked={props.values.useCred}
                  />
                )}
              </Field>
            </div>
            <div className='credURL w-full mb-4'>
              <Field name='credURL'>
                {({ field, meta }: any) => (
                  <Input
                    id='credURL'
                    title='Credentialing URL:'
                    type={props.values.useCred ? 'text' : 'disabled'}
                    meta={meta}
                    field={field}
                    size='widthAuto'
                    disabled={!props.values.useCred}
                    placeholder=''
                  />
                )}
              </Field>
            </div>
            <h2 className='text-2xl border-b pb-1 mb-4'>Media</h2>
            {/* AVATAR */}
            <div className="flex flex-col justify-center items-center">
            <h2 className='text-xl text-center'>Company Logo</h2>
              <div className="mt-8 ml-4 relative w-48 md:w-60">
                <div className="w-48 md:w-60 h-48 md:h-60 rounded-full border-4 overflow-hidden">
                  <img
                    className="object-contain w-full h-full"
                    src={props.values.logoURL}
                    alt="Company logo"
                  />
                </div>
                <Field name='logoURL'>
                {({ field, meta }: any) => (
                  <Uploader id="logoURL" field={field} props={props} spinner>
                    <div className="bg-red-500 w-9 h-9 md:w-12 md:h-12 rounded-full flex justify-center items-center absolute inset-3/4 cursor-pointer transform hover:scale-105 active:scale-100">
                      <img
                        className="w-6 md:w-8"
                        src={iconEdit}
                        alt="icon-edit"
                        style={{ fill: 'red' }}
                      />
                    </div>
                  </Uploader>
                )}
                </Field>
              </div>
            </div>
            {/* AVATAR */}
            <div className='w-full flex justify-center md:justify-end mt-10'>
              <Button
                color='blue'
                label='Update profile'
                size='big'
                type='submit'
              />
            </div>
          </Form>
        )}
      </Formik>
  )
}

export { General }
