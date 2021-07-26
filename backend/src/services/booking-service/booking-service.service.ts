import { bookingRepository } from '~/data/repositories';
import { IBooking } from '~/common/interfaces';

class BookingService {
  public getAllBookings():Promise<IBooking[]>{
    return bookingRepository.getAll()
  }
  public getBookingById(id:string):Promise<IBooking | null>{
    return bookingRepository.getById(id)
  }
  public createNewBooking(booking:IBooking):Promise<IBooking>{
    return bookingRepository.createBooking(booking)
  }
  public async updateBooking(id:string, data:IBooking):Promise<IBooking[]>{
    return bookingRepository.updateById(id, data)
  }
  public deleteBooking(id:string):Promise<number>{
    return bookingRepository.deleteById(id)
  }
}

export { BookingService };
