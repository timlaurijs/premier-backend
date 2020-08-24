"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class results extends Model {
    static associate(models) {
      results.belongsTo(models.user);
      results.belongsTo(models.exercise);
    }
  }
  results.init(
    {
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "result",
    }
  );
  return results;
};
