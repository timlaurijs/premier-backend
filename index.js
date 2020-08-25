const express = require("express")
const { PORT } = require("./config/constants")
//Auth
const loggerMiddleWare = require("morgan")
const authMiddleware = require("./auth/middleware")
const corsMiddleWare = require("cors")

//Routers
const userRoute = require("./routers/users")
const authRouter = require("./routers/auth")
const resultRoute = require("./routers/result")
const exerciseRoute = require("./routers/exercises")

//Models
const User = require("./models").user

const app = express()
app.use(corsMiddleWare())

const bodyParserMiddleWare = express.json()

app.use(loggerMiddleWare("dev"))
app.use(bodyParserMiddleWare)

// Routes
app.use("/", authRouter)
app.use("/users", userRoute)
app.use("/result", resultRoute)
app.use("/exercise", exerciseRoute) //NOT WORKING

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY))
  })
}

//Start a simple express server:

// app.get("/users", async (req, res, next) => {
//   try {
//     const users = await User.findAll();
// console.log('testing doctors', doctors)
//     res.send(users);
//   } catch (e) {
//     next(e);
//   }
// });

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
