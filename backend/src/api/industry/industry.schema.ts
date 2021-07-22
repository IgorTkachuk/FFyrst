import * as Yup from 'yup';

const industrySchema = Yup.object().shape({
  name: Yup.string().trim().required('Industry name is required'),
});

export { industrySchema }
