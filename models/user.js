"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User"
    }
  );
  User.associate = models => {
    User.hasMany(models.Post, { foreignKey: "userId" });
  };
  return User;
};
