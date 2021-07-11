import { StringSchema } from 'yup';

export const emailYupCustomSchema = () => new StringSchema()
  .required('Must be completed')
  .email();
