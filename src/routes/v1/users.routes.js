const express = require("express");
const { userController } = require("./../../controllers");
const userRouter = express.Router();

userRouter.post("/", userController.createUser);
userRouter.get("/:id", userController.getUser);
userRouter.put("/:id", userController.updateUser);

module.exports = userRouter;
