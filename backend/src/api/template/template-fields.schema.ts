import * as Yup from 'yup';

const templateFieldsSchema = Yup.array().of(
  Yup.object().shape({
    name: Yup.string().trim().required('Template name is required'),
    type: Yup.string().trim().required('Template type is required'),
    label: Yup.string().trim(),
    options: Yup.array().of(Yup.string()),
    placeholder: Yup.string().trim(),
    validation: Yup.string().trim(),
    defaultValue: Yup.string().trim(),
    isReadOnly: Yup.boolean()
  })
);

export { templateFieldsSchema }
