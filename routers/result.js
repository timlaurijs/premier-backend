const { Router } = require("express");

//Models
const Result = require("../models").result;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const usersall = await Result.findAll();
    res.json(usersall);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
