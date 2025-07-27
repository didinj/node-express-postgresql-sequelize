const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { validateUser } = require("../middlewares/user.validation");
const validate = require("../middlewares/validate");

// Base route: /api/users
router.post("/", validateUser, validate, userController.create);
router.put("/:id", validateUser, validate, userController.update);
router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.delete("/:id", userController.delete);

module.exports = router;
