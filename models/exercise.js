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
      answers: DataTypes.BOOLEAN,
      questions: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "exercise",
    }
  );
  return exercise;
};
