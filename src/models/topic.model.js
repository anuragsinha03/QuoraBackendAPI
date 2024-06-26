const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "A topic must have a name"],
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Topic = mongoose.model("Topics", topicSchema);

module.exports = Topic;
