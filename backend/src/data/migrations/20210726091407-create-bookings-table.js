'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenant_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('pending', 'accepted', 'cancelled', 'completed')
      },
      amount_to_pay: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      created_by: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      people_required: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      template_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      details: {
        allowNull: false,
        type: Sequelize.JSON
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }, { transaction }),
  ]))),

  down: async queryInterface => {
    return queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([queryInterface.dropTable('bookings', { transaction })]);
    });
  }
};
