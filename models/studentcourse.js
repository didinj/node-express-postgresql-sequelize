'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentCourse = sequelize.define('StudentCourse', {
    student_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {});
  StudentCourse.associate = function(models) {
    // associations can be defined here
  };
  return StudentCourse;
};