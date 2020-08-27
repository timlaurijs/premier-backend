"use strict";

const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jon",
          email: "jon@io.com",
          imageUrl:
            "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1361&q=80",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          progress: 0,
          description: "Hi, i am new to code, and i hope to learn quickly!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria",
          email: "maria@a.com",
          imageUrl:
            "https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          password: bcrypt.hashSync("b", SALT_ROUNDS),
          progress: 0,
          description:
            "Hi, i am so excited to learn to code, specially javascript!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rein",
          email: "rein@a.com",
          imageUrl:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=644&q=80",
          password: bcrypt.hashSync("c", SALT_ROUNDS),
          progress: 0,
          description: "Hi, i am new to code, and i hope to learn quickly!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luna",
          email: "luna@a.com",
          imageUrl:
            "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          password: bcrypt.hashSync("d", SALT_ROUNDS),
          progress: 0,
          description: "Hi, i want to play and learn to code for food!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
