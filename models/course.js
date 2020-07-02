'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsToMany(models.Student, {
        through: 'StudentCourse',
        as: 'students',
        foreignKey: 'course_id'
      });
      Course.belongsTo(models.Lecturer, {
        foreignKey: 'lecturer_id',
        as: 'lecturer'
      });
    }
  };
  Course.init({
    lecturer_id: DataTypes.INTEGER,
    course_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
