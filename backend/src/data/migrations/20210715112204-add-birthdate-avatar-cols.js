'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.addColumn(
          'users',
          'avatar',
          {
            type: Sequelize.STRING,
            defaultValue: '',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'users',
          'birth_date',
          {
            type: Sequelize.DATE,
          },
          { transaction },
        ),
      ]),
    ),
  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.removeColumn('users', 'avatar', { transaction }),
        queryInterface.removeColumn('users', 'birth_date', { transaction }),
      ]),
    );
  },
};
