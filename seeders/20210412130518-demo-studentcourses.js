'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StudentCourses',
      [
        {
          student_id: 1,
          course_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 1,
          course_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 1,
          course_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 2,
          course_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 2,
          course_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 3,
          course_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 3,
          course_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StudentCourses', null, {});
  }
};
