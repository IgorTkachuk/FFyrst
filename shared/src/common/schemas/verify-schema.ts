import { ObjectSchema } from 'yup';
import { emailYupCustomSchema, passwordYupCustomSchema } from '~/common/schemas/yup-cutom-types';

export const verifySchema = new ObjectSchema({
  email: emailYupCustomSchema(),
  password: passwordYupCustomSchema(),
  verifiedPassword: passwordYupCustomSchema(),
});
