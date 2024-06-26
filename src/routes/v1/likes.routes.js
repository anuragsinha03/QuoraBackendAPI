const express = require("express");
const { likeController } = require("./../../controllers");

const likeRouter = express.Router({ mergeParams: true });

likeRouter.post("/", likeController.createLike);

module.exports = likeRouter;
