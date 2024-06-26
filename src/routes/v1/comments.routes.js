const express = require("express");
const commentController = require("./../../controllers/comment.controller");
const likeRouter = require("./likes.routes");
const commentRouter = express.Router({ mergeParams: true });

commentRouter.post("/", commentController.createCommentOnAnswer);
commentRouter.post("/:id/comments", commentController.createCommentOnComment);
commentRouter.use("/:id/likes", likeRouter);
module.exports = commentRouter;
