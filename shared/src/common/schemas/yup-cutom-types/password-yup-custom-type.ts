import { StringSchema } from 'yup';

export const passwordYupCustomSchema = () => new StringSchema()
  .required('Must be completed')
  .min(6, 'Min length 6 symbols')
  .matches(/^[A-Z]/, { message: 'First letter must be capital' })
  .matches(/[0-9]/, { message: 'Must match some number' })
  .matches(/[^\d\sA-Z]/gi, { message: 'Must match some special case character' });
