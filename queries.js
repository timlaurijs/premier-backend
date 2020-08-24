const User = require("./models").user; //the file name in model
const Exercise = require("./models").exercise; //the name inside the model file should be the same
const Result = require("./models").result;

//Get all users:
// async function getAllUsers() {
//   const allusers = await User.findAll(); //User as the const above
//   return allusers.map((user) => user.get({ plain: true }));
// }
// getAllUsers().then((users) => console.log("All users", users));--WORKED

// //GEt all scores
// async function getAllscores() {
//   const allexercises = await Result.findAll();
//   return allexercises.map((item) => item.get({ plain: true }));
// }
// getAllscores().then((items) => console.log("these are my items", items));---WORKED

// //Searches for an user by primary key
// async function getPrimaryUser(key) {
//     const userKey = await User.findByPk(key);
//     return userKey ? userKey.get({ plain: true }) : "Not found"
// }
// // getPrimaryUser(0).then(userbykey => console.log("This user is by key", userbykey))

// //Create a new user
// async function createNewUser({ name, email, phone }) {
//     const newUser = await User.create({
//         name, email, phone
//     })
//     return newUser.get({ plain: true })
// }

// // createNewUser({ name: "Tewu", email: "fodi@hotmail.com", phone: 18967345 })
// //     .then(newuser => console.log("New user", newuser))

// //Searches for an user score by userId
// async function userScore() {
//     const scoreforuserId = await Result.findAll({ where: { important: true } }) //searches for important items and tests if they are true(returning all of the items)
//     return scoreforuserId.map(important => important.get({ plain: true }))
// }

//Get scores by userId
// const getUser = async () => {
//   const score = await Result.findAll({ include: [User] });

//   const plainresults = score.map((p) => p.get({ plain: true }));

//   console.log(plainresults);
//   //Test in terminal: node queries.js
// };
// getUser();--WORKED
