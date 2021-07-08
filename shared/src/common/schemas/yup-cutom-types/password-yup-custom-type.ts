import { StringSchema } from 'yup';

export const passwordYupCustomSchema = () => new StringSchema().required().min(6).matches(/^[A-Z]/).matches(/[0-9]/).matches(/[^\d\sA-Z]/gi)
