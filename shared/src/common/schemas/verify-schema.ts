import { mixed, ObjectSchema, StringSchema } from 'yup';
import { passwordYupCustomSchema } from '~/common/schemas/yup-cutom-types';

export const verifySchema = new ObjectSchema({
  token: new StringSchema().required(),
  password: passwordYupCustomSchema(),
  verifiedPassword: mixed().test('match', 'Passwords do not match', function() {
    return this.parent.password === this.parent.verifiedPassword;
  }),
});
