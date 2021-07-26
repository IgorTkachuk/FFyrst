import React from 'react';
import { Field, FieldProps, Form, Formik } from 'formik';
import { Input } from '../../../stories/inputs/input/input';
import { Button } from '../../../stories/controls/button/Button';
import { useDispatch } from 'react-redux';
import { createUserSchema, updateUserSchema } from 'shared';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { RadioBtn } from '../../../stories/controls/radiobtn/RadioBtn';
import { RadioBtnGroup } from '../../../stories/controls/radioGroup/radioGroup';

type FormType = 'create' | 'update'

interface IProps {
  id?: string,
  type: FormType,
  initialValues: any,
  loading: boolean
  callback: (data: any) => void
}

const CreateUpdateForm: React.FC<IProps> = ({ type, initialValues, loading, callback, id }) => {
  const label = type === 'create' ? 'Create' : 'Update';
  const dispatch = useDispatch();
  const schema = type === 'create' ? createUserSchema : updateUserSchema;
  const { accessToken } = useTypedSelector(state => state.user);
  return (
    <div className=''>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(data) => {
          console.log('Send');
          dispatch(callback({ id, user: data, token: accessToken }));
        }}
      >
        {(form) => (
          <Form className='flex flex-col shadow-md w-full p-10 space-y-4'>
            <p className='text-custom-blue'>Contact info</p>
            <hr className='my-4' />
            <div className='flex space-x-5'>
              <Field name='firstName'>
                {({ field, meta }: any) => (
                  <Input id='firstName' title='First name' type='text' meta={meta} field={field} placeholder={'First name'} />
                )}
              </Field>
              <Field name='lastName'>
                {({ field, meta }: any) => (
                  <Input id='lastName' title='Last name' type='text' meta={meta} field={field} placeholder={'Last name'} />
                )}
              </Field>
            </div>
            <div className='flex space-x-5'>
              <Field name='email'>
                {({ field, meta }: any) => (
                  <Input id='email' title='Email' type='email' meta={meta} field={field} placeholder={'Email'} />
                )}
              </Field>
              <Field name='phoneNumber'>
                {({ field, meta }: any) => (
                  <Input id='phoneNumber' title='Phone' type='text' meta={meta} field={field} placeholder={'Phone'} />
                )}
              </Field>
            </div>
            {type === 'create' && <>
              <p className='text-custom-blue'>Security</p>
              <hr className='my-4 ' />
              <div className='flex space-x-5'>
                <Field name='password'>
                  {({ field, meta }: any) => (
                    <Input id='password' title='Password' type='password' meta={meta} field={field} placeholder={'Password'} />
                  )}
                </Field>
                <Field name='verifiedPassword'>
                  {({ field, meta }: any) => (
                    <Input id='verifiedPassword' title='Confirm password' type='password' meta={meta} field={field} placeholder={'Confirm password'} />
                  )}
                </Field>
              </div>
            </>}
            <div>
              <p className='text-custom-blue'>Date</p>
              <hr className='my-4 ' />
              <Field name='birthDate'>
                {({ field, meta }: any) => (
                  <Input id='birthDate' title='Birthday' type='date' meta={meta} field={field} placeholder={'Birthday'} />
                )}
              </Field>
            </div>
            <p className='text-custom-blue'>Address</p>
            <hr className='my-4 ' />
            <div className='flex space-x-2'>
              <Field name='postalCode'>
                {({ field, meta }: any) => (
                  <Input id='postalCode' title='Postal code' type='text' meta={meta} field={field} placeholder={'Postal code'} />
                )}
              </Field>
              <Field name='streetAddress'>
                {({ field, meta }: any) => (
                  <Input id='streetAddress' title='Street' type='text' meta={meta} field={field} placeholder={'Street'} />
                )}
              </Field>
            </div>
            <div className='flex space-x-2'>
              <Field name='stateAddress'>
                {({ field, meta }: any) => (
                  <Input id='stateAddress' title='State' type='text' meta={meta} field={field} placeholder={'State'} />
                )}
              </Field>
              <Field name='cityAddress'>
                {({ field, meta }: any) => (
                  <Input id='cityAddress' title='City' type='text' meta={meta} field={field} placeholder={'City'} />
                )}
              </Field>
            </div>
            {type === 'update' && <>
              <p className='text-custom-blue'>Personal information</p>
              <hr className='my-4 ' />
              <Field name='marriageStatus'>
                {({ field, meta, form }: any) => (
                  <RadioBtnGroup title="Married :" btns={[{id:"1",label:"Yes",value:true},{value:false,label:"No",id:"2"}]} form={form} meta={meta} field={field} />
                )}
              </Field>
              <Field name='dependantsAmount'>
                {({ field, meta }: any) => (
                  <Input id='dependantsAmount' title='Dependants amount' placeholder='Dependants amount' type='text' meta={meta} field={field} />
                )}
              </Field>
            </>}
            <hr />
            <div className='flex justify-end mt-10 space-x-4'>
              <Button like={'primary'} label={label} type={'submit'} disabled={loading} />
              <Button like={'secondary'} label='Reset' type={'reset'} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateUpdateForm;
