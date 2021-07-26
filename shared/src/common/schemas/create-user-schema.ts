import { ObjectSchema, StringSchema, mixed, DateSchema } from 'yup';
import { passwordYupCustomSchema, emailYupCustomSchema } from './yup-cutom-types';

export const createUserSchema = new ObjectSchema({
  firstName: new StringSchema().required('Please write you name'),
  lastName: new StringSchema().required('Please write you surname'),
  phoneNumber: new StringSchema().required('Please write you phone number')
    .matches(/^\+?\d{10,12}$/, 'Phone Number is invalid'),
  email: emailYupCustomSchema(),
  password: passwordYupCustomSchema(),
  verifiedPassword: mixed().test('match', 'Passwords do not match', function() {
    return this.parent.password === this.parent.verifiedPassword;
  }),
  birthDate: new DateSchema().required('Please select you birth date'),
  postalCode: new StringSchema().required('Please write your postal code'),
  streetAddress: new StringSchema().required('Please write your street address'),
  stateAddress: new StringSchema().required('Please write your state address'),
  cityAddress: new StringSchema().required('Please write your city address'),
});
