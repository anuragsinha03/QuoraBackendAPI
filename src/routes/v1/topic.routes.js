const express = require("express");
const { topicController } = require("./../../controllers");
const topicRouter = express.Router();

topicRouter.post("/", topicController.createTopic);
topicRouter.get("/", topicController.getAllTopics);

module.exports = topicRouter;
