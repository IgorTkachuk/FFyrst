import * as Yup from 'yup';
import { StringSchema } from 'yup';

const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('First Name is required') : schema
    )),
  lastName: Yup.string()
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('Last Name is required') : schema
    )),
  email: Yup.string().email('Email is invalid')
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('Email is required') : schema
    )),
  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,12}$/, 'Phone Number is invalid')
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('Phone is required') : schema
    )),
  password: Yup.string()
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 6 characters, one uppercase, one number and one special case character',
    )
    .min(6, 'Password Must Contain 6 Characters')
    .when('$required', (required: boolean, schema: StringSchema) => (
      required ? schema.required('Password is required') : schema
    )),
});

export { userSchema }
