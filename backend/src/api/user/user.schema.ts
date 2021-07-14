import * as Yup from 'yup';
import {StringSchema, DateSchema} from 'yup';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('First Name is required') : schema
    )),
  surname: Yup.string()
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('Last Name is required') : schema
    )),
  birthdate: Yup.date()
    .when('$required', (required: boolean, schema: DateSchema) => (
      required ? schema.required('Last Name is required') : schema
    )),
  email: Yup.string().email('Email is invalid')
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('Email is required') : schema
    )),
  phone: Yup.string()
    .matches(/^\+?\d{10,12}$/, 'Phone Number is invalid')
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('Phone is required') : schema
    )),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])/,
      'Password Must Contain at least One Uppercase and One Number',
    )
    .min(6, 'Password Must Contain 6 Characters')
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('Password is required') : schema
    )),
});

export { userSchema }