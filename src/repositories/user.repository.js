const { User } = require("./../models/index");
const logger = require("./../config/logger.config");

class UserRepository {
	async createUser(userData) {
		try {
			const newUser = await User.create({
				username: userData.username,
				email: userData.email,
				bio: userData.bio,
			});

			logger.info(
				`User.Repository: [createUser] - User with username: ${userData.username} successfully created in the DB.`
			);
			return newUser;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getUser(userId) {
		try {
			const user = await User.findById(userId);
			if (!user) {
				logger.error(
					`User.Repository: [getUser] - User with ID: ${userId} not found in the DB.`
				);
				throw new NotFound("User", userId);
			}

			logger.info(
				`User.Repository: [getUser] - User with ID: ${userId} successfully fetched from the DB.`
			);

			return user;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async updateUser(userId, userData) {
		try {
			const updatedUser = await User.findByIdAndUpdate(userId, userData, {
				new: true,
			});

			if (!updatedUser) {
				logger.error(
					`User.Repository: [updateUser] - User with ID: ${userId} not found in the DB.`
				);
				throw new NotFound("User", userId);
			}

			logger.info(
				`User.Repository: [updateUser] - User with ID: ${userId} successfully updated in the DB.`
			);

			return updatedUser;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = UserRepository;
