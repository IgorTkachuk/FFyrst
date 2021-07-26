import * as Yup from 'yup';
import { BookingStatus } from '~/common/enums';

const bookingSchema = Yup.object().shape({
  tenantId: Yup.number().required('Tenant id is required'),
  status: Yup.string().oneOf([
    BookingStatus.PENDING,
    BookingStatus.ACCEPTED,
    BookingStatus.CANCELLED,
    BookingStatus.COMPLETED
  ]),

  createdBy: Yup.number(),//.required('User id is required'),
  peopleRequired: Yup.number().required('People required is required'),
  templateId: Yup.number().required('Template id is required'),
  details: Yup.object().shape({
    amountToPay: Yup.number().required('Amount to pay is required'),
  }).required('Details are required'),
});

export { bookingSchema }
