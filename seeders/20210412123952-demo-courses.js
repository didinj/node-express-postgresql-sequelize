'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Courses',
      [
        {
          course_name: 'Math',
          lecturer_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          course_name: 'Physic',
          lecturer_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          course_name: 'Computer Science',
          lecturer_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          course_name: 'Chemistry',
          lecturer_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};