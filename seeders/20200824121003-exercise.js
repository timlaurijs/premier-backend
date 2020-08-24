"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "exercises",
      [
        {
          questions: "Declare the following variables",
          description: "Javascript variable declaration",
          answers: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "sort the following array",
          description: "arrays",
          answers: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Write the data type that is missing in the following list:",
          description: "data types",
          answers: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "Assign the contents of a to variable b",
          description: "assignment operator",
          answers: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("exercises", null, {});
  },
};
