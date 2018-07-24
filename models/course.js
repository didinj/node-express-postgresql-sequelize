'use strict';

module.exports = (sequelize, DataTypes) => {
  var Course = sequelize.define('Course', {
    lecturer_id: DataTypes.INTEGER,
    course_name: DataTypes.STRING
  }, {});

  Course.associate = function(models) {
    Course.belongsToMany(models.Student, {
      through: 'StudentCourse',
      as: 'students',
      foreignKey: 'course_id'
    });
    Course.belongsTo(models.Lecturer, {
      foreignKey: 'lecturer_id',
      as: 'lecturer'
    });
  };

  return Course;
};
