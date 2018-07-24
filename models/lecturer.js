'use strict';

module.exports = (sequelize, DataTypes) => {
  var Lecturer = sequelize.define('Lecturer', {
    lecturer_name: DataTypes.STRING
  }, {});

  Lecturer.associate = function(models) {
    Lecturer.hasOne(models.Course, {
      foreignKey: 'lecturer_id',
      as: 'course',
    });
  };

  return Lecturer;
};
