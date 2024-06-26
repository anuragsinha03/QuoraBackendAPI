const { StatusCodes } = require("http-status-codes");
const { UserService } = require("./../services");
const { UserRepository } = require("./../repositories");

const userService = new UserService(new UserRepository());

function pingUserController(req, res) {
	return res.json({
		message: "User Controller is running",
	});
}

async function createUser(req, res, next) {
	try {
		const newUser = await userService.createUser(req.body);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: "Successfully created a new user",
			error: {},
			data: newUser,
		});
	} catch (error) {
		next(error);
	}
}

async function getUser(req, res, next) {
	try {
		const id = req.params.id;
		const user = await userService.getUser(id);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: `Successfully fetched the user with ID: ${id}`,
			error: {},
			data: user,
		});
	} catch (error) {
		next(error);
	}
}

async function updateUser(req, res, next) {
	try {
		const id = req.params.id;
		const updatedUser = await userService.updateUser(id, req.body);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: `Successfully updated the user with ID ${id}`,
			error: {},
			data: updatedUser,
		});
	} catch (error) {
		next(error);
	}
}

module.exports = {
	pingUserController,
	createUser,
	getUser,
	updateUser,
};
