'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.createTable('tenants', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      logo_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      legal_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      domain_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }, { transaction }),
  ]))),

  down: async queryInterface => {
    return queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([queryInterface.dropTable('tenants', { transaction })]);
    });
  }
};
