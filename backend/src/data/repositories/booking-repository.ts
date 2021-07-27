import { BookingModel } from '../models';
import { IBooking } from '~/common/interfaces';

class BookingRepository {
  public getAll():Promise<IBooking[]>{
    return BookingModel.findAll()
  }
  public getById(id:string):Promise<IBooking | null>{
    return BookingModel.findByPk(id)
  }
  public createBooking(booking:IBooking):Promise<IBooking>{
    return BookingModel.create(booking)
  }
  public async updateById(id:string, data:IBooking):Promise<IBooking[]>{
    const result = await BookingModel.update(data, {
      where: { id },
      returning: true
    });
    return result[1];
  }
  public deleteById(id:string):Promise<number>{
    return BookingModel.destroy({
      where: { id }
    });
  }
}

export { BookingRepository };
