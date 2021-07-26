import { bookingRepository } from '~/data/repositories';
import { IBooking } from '~/common/interfaces';
import { BookingStatus } from '~/common/enums';
import { templateService } from '../services';
import { templateCheck } from '~/helpers';

class BookingService {
  public getAllBookings():Promise<IBooking[]>{
    return bookingRepository.getAll()
  }
  public getBookingById(id:string):Promise<IBooking | null>{
    return bookingRepository.getById(id)
  }
  public async createNewBooking(booking:IBooking, id:number):Promise<IBooking>{
    const {details, templateId} = booking;
    const templateData = await templateService.getTemplateById(templateId.toString());

    if(templateData) {
      templateCheck.bookingDetails(templateData.template, details)
    } else {
      throw new Error(`Template with id: ${templateId} doesn't exist`)
    }

    const bookingData: IBooking = {
      ...booking,
      status: BookingStatus.PENDING,
      amountToPay: booking.details.amountToPay,
      createdBy: id,
    }
    return bookingRepository.createBooking(bookingData)
  }
  public async updateBooking(id:string, data:IBooking):Promise<IBooking[]>{
    return bookingRepository.updateById(id, data)
  }
  public deleteBooking(id:string):Promise<number>{
    return bookingRepository.deleteById(id)
  }
}

export { BookingService };
