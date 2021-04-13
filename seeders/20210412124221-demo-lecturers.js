'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lecturers',
      [
        {
          lecturer_name: 'Franco Tellimo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lecturer_name: 'Sabby Merty',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lecturer_name: 'Sam Brito',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lecturer_name: 'Mable Quare',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lecturers', null, {});
  }
};
