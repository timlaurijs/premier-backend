const { Router } = require("express"); //Router class from express
const router = new Router();
//Import our model
const User = require("../models").user;

//Register a GET route that gets all my doctors

router.get("/", async (req, res, next) => {
  try {
    const usersall = await User.findAll();
    res.json(usersall);
  } catch (e) {
    next(e);
  }
});

//EXPORT THE ROUTER
module.exports = router;
