const { Router } = require("express");

//Models
const Exercise = require("../models").exercise;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const usersall = await Exercise.findAll();
    res.json(usersall);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
