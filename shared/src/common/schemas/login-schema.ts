import { ObjectSchema } from 'yup';
import { passwordYupCustomSchema, emailYupCustomSchema } from '~/common/schemas/yup-cutom-types';

export const loginSchema = new ObjectSchema({
  email: emailYupCustomSchema(),
  password: passwordYupCustomSchema(),
});
