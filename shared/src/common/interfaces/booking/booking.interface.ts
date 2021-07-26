import { BookingStatus } from '~/common/enums';

export interface IBooking {
  id?: string
  tenantId: number
  status: BookingStatus
  amountToPay: number
  createdBy: number
  peopleRequired: number
  templateId: number
  details: {
    amountToPay: number
    [key: string]: any
  }
  createdAt: Date
  updatedAt: Date
}
