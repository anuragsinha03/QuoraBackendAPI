const express = require("express");
const { connectToDB } = require("./config/db.config");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
	return res.json({
		message: "PING Check! Server is alive",
	});
});

app.listen(PORT, async () => {
	console.log(`Server is now running on PORT ${PORT}`);
	await connectToDB();
	console.log("Successfully connected to DB");
});
