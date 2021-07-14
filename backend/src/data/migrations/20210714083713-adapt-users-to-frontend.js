'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.renameColumn('users', 'name', 'firstName', { transaction }),
    queryInterface.renameColumn('users', 'surname', 'lastName', { transaction }),
    queryInterface.renameColumn('users', 'phone', 'phoneNumber', { transaction }),
    queryInterface.removeColumn('users', 'birthdate', { transaction }),
  ]))),

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((transaction) => Promise.all([
      queryInterface.renameColumn('users', 'firstName', 'name', { transaction }),
      queryInterface.renameColumn('users', 'lastName', 'surname', { transaction }),
      queryInterface.renameColumn('users', 'phoneNumber', 'phone', { transaction }),
      queryInterface.addColumn('users', 'birthdate', {
        allowNull: false,
        type: Sequelize.DATE
      }, { transaction }),
    ]));
  }
};
