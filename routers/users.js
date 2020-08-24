const { Router } = require("express");
const router = new Router();
//Import our model
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

router.get("/", async (req, res, next) => {
  try {
    const usersall = await User.findAll();
    res.json(usersall);
  } catch (e) {
    next(e);
  }
});

router.patch("/:userId", authMiddleware, async (req, res, next) => {
  try {
    const id = parseInt(req.params.userId);
    const update = await User.findByPk(id);
    if (!update) {
      res.status(404).send("User not found");
    } else {
      const updated = await update.update(req.body);
      res.json(updated);
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:userId", authMiddleware, async (req, res, next) => {
  try {
    const id = parseInt(req.params.userId);
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) {
      res.status(404).send("User not found");
    } else {
      const deleted = userToDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
