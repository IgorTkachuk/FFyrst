'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      first_name: 'name1',
      last_name: 'surname1',
      phone_number: '+111111111111',
      email: 'somemail@gmail.com',
      password: '$2y$10$2.c.Xs0KFfxq13ipXgbyYebSP6O9Hi6nu50eslUFUJ0PDYOgFOdFO',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      first_name: 'test',
      last_name: 'user',
      phone_number: '+380954736369',
      email: 'Test.User@gmail.com',
      password: '$2b$10$7O5SPKdvO8j7XVLqlCg6t.57b/4lY03odoj4O5jya6vtjkxSkVQrK',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
