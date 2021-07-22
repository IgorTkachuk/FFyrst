'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    // queryInterface.removeConstraint('users', 'users_pkey', { transaction }),
    queryInterface.removeColumn('users', 'id', { transaction }),
    queryInterface.addColumn('users', 'id', {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    }, { transaction }),
  ]))),

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((transaction) => Promise.all([
      // queryInterface.removeConstraint('users', 'users_pkey', { transaction }),
      queryInterface.removeColumn('users', 'id', { transaction }),
      queryInterface.addColumn('users', 'id', {
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      }, { transaction }),
      ]));
  }
};
