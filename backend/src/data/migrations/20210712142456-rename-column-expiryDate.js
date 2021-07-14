'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.renameColumn('users', 'expiryDate', 'activationTokenExpiration', { transaction })
  ]))),

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) => Promise.all([
      queryInterface.renameColumn('users', 'activationTokenExpiration', 'expiryDate', { transaction })
    ]));
  }
};

