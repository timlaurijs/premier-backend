"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "exercises",
      [
        {
          exercise: "Change the 0 so that sum will equal 20.",
          description: "Add Two Numbers with JavaScript",
          given: "var sum; sum = 10 + 0; console.log(sum);",
          answer: "[20]",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise:
            "We've got const a = 2 and const b = 5. How can we make sure that we get an output of 10?",
          description: "Adding two variables with JavaScript",
          given: "const a = 2; const b = 5;",
          answer: "[10]",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise:
            "Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.",
          description: "Finding a Remainder in JavaScript",
          given: "var remainder; remainder = //enter answer here",
          answer: "[2]",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise:
            "Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.",
          description: "Find the Length of a String with JavaScript",
          given:
            "var lastNameLength = 0; var lastName = 'Lovelace'; lastNameLength = lastName //change lastName ; console.log(lastNameLength)",
          answer: "[8]",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise:
            "Change the code to use the ++ operator on myVar to add 2 to myVar.",
          description: "Increment a Number with JavaScript",
          given:
            "var myVar = 87; myVar = myVar + 1; //use  ++ operator here; console.log(myVar)",
          answer: "[88]",
          userId: 4,
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
