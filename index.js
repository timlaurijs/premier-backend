//Routing
//Express server
const express = require("express");
const authMiddleware = require("./auth/middleware");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const PORT = process.env.PORT || 4000;
const authRouter = require("./routers/auth");
const userRoute = require("./routers/users");
const resultRoute = require("./routers/result");
const exerciseRoute = require("./routers/exercises");

const app = express();
const bodyParserMiddleWare = express.json();

app.use(loggerMiddleWare("dev"));
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

// //our Models to test the express server:
const User = require("./models").user;

//Start a simple express server:
// //Gets all users
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    // console.log('testing doctors', doctors)
    res.send(users);
  } catch (e) {
    next(e);
  }
}); //test with  http :4003/users

//Get all patients and their doctors

// app.get("/patients", async (req, res, next) => {
//     try {
//         const patients = await Patient.findAll({ include: [Doctor] });
//         // console.log('testing customers', patients)
//         res.send(patients);
//     } catch (e) {
//         next(e);
//     }
// }); //test with  http :4005/patients

// Routes
app.use("/", authRouter);
app.use("/users", userRoute);
app.use("/result", resultRoute);
app.use("/exercise", exerciseRoute); //NOT WORKING

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
