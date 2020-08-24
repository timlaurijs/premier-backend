"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "results",
      [
        {
          userId: 1,
          exerciseId: 1,
          score: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          exerciseId: 1,
          score: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          exerciseId: 3,
          score: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          exerciseId: 4,
          score: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("results", null, {});
  },
};
