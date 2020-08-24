const { Router } = require("express"); //Router class from express
const router = new Router();
//Import our model
const Result = require("../models").result;

//Register a GET route that gets all my doctors

router.get("/", async (req, res, next) => {
  try {
    const usersall = await Result.findAll();
    res.json(usersall);
  } catch (e) {
    next(e);
  }
});

//EXPORT THE ROUTER
module.exports = router;
