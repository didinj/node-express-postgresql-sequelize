'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Classrooms',
      [
        {
          class_name: 'Class-1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          class_name: 'Class-2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          class_name: 'Class-3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Classrooms', null, {});
  }
};
