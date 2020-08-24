"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("exercises", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users", //always the name here of model plural
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("exercises", "userId");
  },
};
