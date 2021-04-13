'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students',
      [
        {
          student_name: 'John Doe',
          classroom_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_name: 'Ramazan Sakin',
          classroom_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_name: 'Mehmet Ak',
          classroom_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_name: 'Veli Kara',
          classroom_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_name: 'Salih Kartepe',
          classroom_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_name: 'Kelly Coys',
          classroom_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_name: 'Ravi Tamadi',
          classroom_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_name: 'Cristopher Ricco',
          classroom_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};