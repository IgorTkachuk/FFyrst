import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

import { IBooking } from '~/common/interfaces';
import { ModelName, BookingStatus } from '~/common/enums'

interface BookingInstance extends IBooking, Model {}

const createBookingModel = (orm:Sequelize): ModelCtor<BookingInstance> => {
  const BookingModel = orm.define<BookingInstance>(ModelName.BOOKING, {
      tenantId: {
        field: 'tenant_id',
        allowNull: false,
        type: DataTypes.NUMBER
      },
      status: {
        field: 'status',
        allowNull: false,
        type: DataTypes.ENUM(
          BookingStatus.PENDING,
          BookingStatus.ACCEPTED,
          BookingStatus.CANCELLED,
          BookingStatus.COMPLETED,
        )
      },
      amountToPay: {
        field: 'amount_to_pay',
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2)
      },
      createdBy: {
        field: 'created_by',
        allowNull: false,
        type: DataTypes.NUMBER
      },
      peopleRequired: {
        field: 'people_required',
        allowNull: false,
        type: DataTypes.NUMBER,
      },
      templateId: {
        field: 'template_id',
        allowNull: false,
        type: DataTypes.NUMBER,
      },
      details: {
        field: 'details',
        allowNull: false,
        type: DataTypes.JSON
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      tableName: 'bookings',
    }
  )
  return BookingModel;
};

export default createBookingModel;
