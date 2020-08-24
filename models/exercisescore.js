"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class exerciseScore extends Model {
    static associate(models) {
      // define association here
    }
  }
  exerciseScore.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "exerciseScore",
    }
  );
  return exerciseScore;
};
