"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class exercise extends Model {
    static associate(models) {
      exercise.belongsTo(models.user);
      exercise.hasMany(models.result);
    }
  }
  exercise.init(
    {
      exercise: DataTypes.TEXT,
      description: DataTypes.TEXT,
      given: DataTypes.STRING,
      answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "exercise",
    }
  );
  return exercise;
};
