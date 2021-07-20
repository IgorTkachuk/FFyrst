'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.addConstraint('users', {
      fields: ['id'],
      type: 'primary key',
      name: 'users_pkey'
    }, { transaction })
  ]))),

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) => Promise.all([
      queryInterface.removeConstraint('users', 'users_pkey', { transaction }),
    ]));
  }
};
