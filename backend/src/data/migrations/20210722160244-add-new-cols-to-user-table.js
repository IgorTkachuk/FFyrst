'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.addColumn(
          'users',
          'postal_code',
          {
            type: Sequelize.STRING,
            defaultValue: '',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'users',
          'state_address',
          {
            type: Sequelize.STRING,
            defaultValue: '',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'users',
          'city_address',
          {
            type: Sequelize.STRING,
            defaultValue: '',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'users',
          'street_address',
          {
            type: Sequelize.STRING,
            defaultValue: '',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'users',
          'marriage_status',
          {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'users',
          'dependants_amount',
          {
            type: Sequelize.INTEGER,
            defaultValue: 0,
          },
          { transaction },
        ),
      ]),
    ),

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.removeColumn('users', 'postal_code', { transaction }),
        queryInterface.removeColumn('users', 'state_address', { transaction }),
        queryInterface.removeColumn('users', 'city_address', { transaction }),
        queryInterface.removeColumn('users', 'street_address', { transaction }),
        queryInterface.removeColumn('users', 'marriage_status', { transaction }),
        queryInterface.removeColumn('users', 'dependants_amount', { transaction }),
      ]),
    );
  },
};
