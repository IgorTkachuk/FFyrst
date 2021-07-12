'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.removeColumn('users', 'sex', { transaction }),
    queryInterface.dropEnum('enum_users_sex', { transaction}),
    queryInterface.removeColumn('users', 'type', { transaction }),
    queryInterface.dropEnum('enum_users_type', { transaction}),
    queryInterface.removeColumn('users', 'imagePath', { transaction }),
    queryInterface.removeColumn('users', 'diagnosis', { transaction }),
  ]))),

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((transaction) => Promise.all([
      queryInterface.dropEnum('enum_users_sex', { transaction}),
      queryInterface.dropEnum('enum_users_type', { transaction}),
      queryInterface.addColumn('users', 'sex', {
        type: Sequelize.ENUM('male', 'female')
      }, { transaction }),
      queryInterface.addColumn('users', 'type', {
        type: Sequelize.ENUM('doctor', 'patient')
      }, { transaction }),
      queryInterface.addColumn('users', 'imagePath', {
        type: Sequelize.STRING
      }, { transaction }),
      queryInterface.addColumn('users', 'diagnosis', {
        type: Sequelize.UUID
      }, { transaction }),
    ]));
  }
};
