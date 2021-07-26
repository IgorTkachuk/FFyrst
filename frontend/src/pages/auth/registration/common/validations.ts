import * as Yup from 'yup';
import 'yup-phone';

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[ a-zA-Z]*([[ a-zA-Z]*]?)$/, 'Enter correct data')
    .required('First Name is required'),
  lastName: Yup.string()
    .matches(/^( ?)[A-Za-z]*( ?)$/, 'Enter correct data')
    .required('Last Name is required'),
  email: Yup.string().email('Email is invalid')
    .matches(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/, 'Enter correct data')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,12}$/, 'Enter correct data')
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
