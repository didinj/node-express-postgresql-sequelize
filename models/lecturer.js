'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    static associate(models) {
      Lecturer.hasOne(models.Course, {
        foreignKey: 'lecturer_id',
        as: 'course',
      });
    }
  };
  Lecturer.init({
    lecturer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lecturer',
  });
  return Lecturer;
};
