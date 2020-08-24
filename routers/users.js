const { Router } = require("express");
const router = new Router();
//Import our model
const User = require("../models").user;



router.get("/", async (req, res, next) => {
  try {
    const usersall = await User.findAll();
    res.json(usersall);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
