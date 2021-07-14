'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.renameColumn('users', 'firstName', 'first_name', { transaction }),
    queryInterface.renameColumn('users', 'lastName', 'last_name', { transaction }),
    queryInterface.renameColumn('users', 'phoneNumber', 'phone_number', { transaction }),
    queryInterface.renameColumn('users', 'isActive', 'is_active', { transaction }),
    queryInterface.renameColumn('users', 'activationTokenExpiration', 'activation_token_expiration', { transaction }),
    queryInterface.renameColumn('users', 'activationToken', 'activation_token', { transaction }),
  ]))),

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) => Promise.all([
      queryInterface.renameColumn('users', 'first_name', 'firstName', { transaction }),
      queryInterface.renameColumn('users', 'last_name', 'lastName', { transaction }),
      queryInterface.renameColumn('users', 'phone_number', 'phoneNumber', { transaction }),
      queryInterface.renameColumn('users', 'is_active', 'isActive', { transaction }),
      queryInterface.renameColumn('users', 'activation_token_expiration', 'activationTokenExpiration', { transaction }),
      queryInterface.renameColumn('users', 'activation_token', 'activationToken', { transaction }),
    ]));
  }
};

