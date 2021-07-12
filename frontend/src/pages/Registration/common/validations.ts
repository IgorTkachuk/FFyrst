import * as Yup from 'yup';
import 'yup-phone';

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phoneNumber: Yup.string()
    .phone('', false, 'Phone Number is invalid')
    .required('Phone Number is required'),
  password: Yup.string()
    .matches(/^[A-Z]/, 'First letter must be capital')
    .matches(/[0-9]/, 'Must match some number')
    .matches(/[^\d\sA-Z]/gi, 'Must match some special case character')
    .required('Must be completed')
    .min(6, 'Min length 6 symbols'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
