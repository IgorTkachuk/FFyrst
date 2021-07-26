import { ObjectSchema, StringSchema, mixed, DateSchema, BooleanSchema, NumberSchema, number } from 'yup';
import { passwordYupCustomSchema, emailYupCustomSchema } from './yup-cutom-types';

export const updateUserSchema = new ObjectSchema({
  firstName: new StringSchema().required('Please write you name'),
  lastName: new StringSchema().required('Please write you surname'),
  phoneNumber: new StringSchema().required('Please write you phone number')
    .matches(/^\+?\d{10,12}$/, 'Phone Number is invalid'),
  email: emailYupCustomSchema(),
  birthDate: new DateSchema().required('Please select you birth date'),
  postalCode: new StringSchema().required('Please write your postal code'),
  streetAddress: new StringSchema().required('Please write your street address'),
  stateAddress: new StringSchema().required('Please write your state address'),
  cityAddress: new StringSchema().required('Please write your city address'),
  marriageStatus: new BooleanSchema().required('Please select your marriageStatus'),
  dependantsAmount: new NumberSchema().required('Please complete this line').typeError('Must be a number'),
});
