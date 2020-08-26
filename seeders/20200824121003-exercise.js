"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "exercises",
      [
        {
          exercise: "Change the value of myVar so that it equals 9.",
          description: "Assign a Value to a Variable with JavaScript",
          hint:
            "Use console.log(//answer here) to make sure you submit correctly. In JavaScript, you can store a value in a variable with the assignment operator. Example: myVariable = 5;",
          given: "var myVar;",
          answer: "[9]",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise:
            "How can we make sure that we get an output of 10, using variables a and b?",
          description: "Add Two Variables with JavaScript",
          hint:
            "Use console.log(//answer here) to make sure you submit correctly. JavaScript uses the + symbol as an addition operator when placed between two numbers.",
          given: "const a = 2; const b = 5;",
          answer: "[10]",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise:
            "Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.",
          description: "Finding a Remainder in JavaScript",
          hint:
            "Use console.log(//answer here) to make sure you submit correctly. The remainder operator % gives the remainder of the division of two numbers.",
          given: "var remainder;",
          answer: "[2]",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise:
            "Use the .length property to count the number of characters in the lastName variable and assign it to a new variable lastNameLength.",
          description: "Find the Length of a String with JavaScript",
          hint:
            "Use console.log(//answer here) to make sure you submit correctly. You can find the length of a String value by writing .length after the string variable or string literal.",
          given: "var lastName = 'Lovelace';",
          answer: "[8]",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise: "Use the increment operator on myVar to add 1 to myVar.",
          description: "Increment a Number with JavaScript",
          hint:
            "Use console.log(//answer here) to make sure you submit correctly. You can easily increment or add one to a variable with the ++ operator.",
          given: "var myVar = 87;",
          answer: "[88]",
          userId: 1,
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
