import * as Yup from 'yup';
import 'yup-phone';

export const platformGeneralSchema = Yup.object().shape({
  name: Yup.string().trim().required('Platform name is required'),
  domainURL: Yup.string().trim().required('Domain URL is required'),
  supportEmail: Yup.string().trim().email('Email is invalid'),
  industry: Yup.number().integer().required('Industry is required'),
  phoneNumber: Yup.string().trim()
    .phone('', false, 'Phone Number is invalid')
    .required('Phone Number is required'),
  invoiceAddress: Yup.string().trim(),
  useCred: Yup.boolean(),
  credURL: Yup.string().trim(),
  logoURL: Yup.string().trim().url('Invalid Logo URL'),
});
