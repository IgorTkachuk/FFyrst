'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'name1',
      surname: 'surname1',
      birthdate: '10-10-2010',
      sex: 'male',
      type: 'doctor',
      phone: '+111111111111',
      email: 'somemail@gmail.com',
      password: '$2y$10$2.c.Xs0KFfxq13ipXgbyYebSP6O9Hi6nu50eslUFUJ0PDYOgFOdFO',
      imagePath: 'somefqfq',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'test',
      surname: 'user',
      birthdate: '02-08-1978',
      sex: 'male',
      type: 'doctor',
      phone: '+380954736369',
      email: 'Test.User@gmail.com',
      password: '$2b$10$7O5SPKdvO8j7XVLqlCg6t.57b/4lY03odoj4O5jya6vtjkxSkVQrK',
      imagePath: '/img/Test.User.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
