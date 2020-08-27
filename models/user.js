"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
      user.hasMany(models.exercise);
    }
  }
  user.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      imageUrl: DataTypes.STRING,
      progress: DataTypes.INTEGER,
      password: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
