module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("results", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users", //always the name here of model plural
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("result", "exerciseId", {
      type: Sequelize.INTEGER,
      references: {
        model: "exercises",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE", //Cascade because onDuties is a join table
    });

    await queryInterface.addColumn("exercise", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("exercise", "userId");
    await queryInterface.removeColumn("results", "exerciseId");
    await queryInterface.removeColumn("results", "userId");
  },
};
