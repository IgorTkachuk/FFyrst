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
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
