import { ObjectSchema } from 'yup';
import { emailYupCustomSchema } from '~/common/schemas/yup-cutom-types';

export const resetSchema = new ObjectSchema({
  email: emailYupCustomSchema(),
});
