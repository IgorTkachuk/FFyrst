import * as Yup from 'yup';
import 'yup-phone';

export const userProfileShema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phoneNumber: Yup.string()
    .phone('', false, 'Phone Number is invalid')
    .required('Phone Number is required'),
  birthDate: Yup.date().required('Date is required'),
});
