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
    //working fine
    // .matches(
    //   /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
    //   'Password Must Contain at least 6 Characters, One Uppercase, One Number, and One Special Character',
    // )
    .min(6, 'Password Must Contain 6 Characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
