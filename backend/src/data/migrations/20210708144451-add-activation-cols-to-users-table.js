'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.addColumn('users', 'isActive', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }, { transaction }),
    queryInterface.addColumn('users', 'expiryDate', {
      type: Sequelize.DATE,
      defaultValue: Date.now() + 1000 * 60 * 60
    }, { transaction }),
    queryInterface.addColumn('users', 'activationToken', {
      type: Sequelize.STRING
    }, { transaction }),
  ]))),

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) => Promise.all([
      queryInterface.removeColumn('users', 'isActive', { transaction }),
      queryInterface.removeColumn('users', 'expiryDate', { transaction }),
      queryInterface.removeColumn('users', 'activationToken', { transaction }),
    ]));
  }
};

