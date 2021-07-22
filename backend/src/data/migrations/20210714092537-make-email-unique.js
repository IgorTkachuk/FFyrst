'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      // unique: true
    }, { transaction })
  ]))),

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((transaction) => Promise.all([
      queryInterface.changeColumn('users', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        // unique: false
      }, { transaction })
    ]));
  }
};
