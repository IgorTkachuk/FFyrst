import { Router } from 'express';
import { ApiPath, HttpCode, BookingApiPath } from 'shared';
import { getPlatform } from '~/middlewares/get-platform/get-platform.middelware';
import { jwtValidation } from '~/middlewares/jwt-validation/jwt-validation.middelware';
import { bookingService } from '~/services/services';
import { bookingSchema } from './booking.schema';


const initBookingApi = (apiRouter: Router): Router => {
  const bookingRouter = Router();

  apiRouter.use(ApiPath.BOOKING, bookingRouter);

  bookingRouter.get(BookingApiPath.ROOT, async (_req, res, next) => {
    try {
      const bookings = await bookingService.getAllBookings();
      res.status(HttpCode.OK).json(bookings);
    } catch (error) {
      next(error);
    }
  });

  bookingRouter.get(BookingApiPath.$ID, async (_req, res, next) => {
    try {
      const booking = await bookingService.getBookingById(_req.params.id);
      res.status(HttpCode.OK).json(booking);
    } catch (error) {
      next(error);
    }
  });

  bookingRouter.post(BookingApiPath.ROOT, getPlatform, async (_req, res, next) => {
    try {
      await bookingSchema.validate(_req.body);
      const booking = await bookingService.createNewBooking(_req.body);
      res.status(HttpCode.OK).json(booking);
    } catch (error) {
      next(error);
    }
  });

  bookingRouter.put(BookingApiPath.$ID, getPlatform, async (_req, res, next) => {
    try {
      await bookingSchema.validate(_req.body);
      const bookingUpdateInfo = await bookingService.updateBooking(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(bookingUpdateInfo[0]);
    } catch (error) {
      next(error);
    }
  });

  bookingRouter.delete(BookingApiPath.$ID, async (_req, res, next) => {
    try {
      await bookingService.deleteBooking(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json();
    } catch (error) {
      next(error);
    }
  });

  return bookingRouter;
};

export { initBookingApi };
