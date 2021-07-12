import { ObjectSchema, StringSchema } from 'yup';
import { passwordYupCustomSchema } from '~/common/schemas/yup-cutom-types';

export const verifySchema = new ObjectSchema({
  token: new StringSchema().required(),
  password: passwordYupCustomSchema(),
  verifiedPassword: passwordYupCustomSchema(),
});
