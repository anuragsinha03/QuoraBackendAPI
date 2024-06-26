const { User } = require("./../models/index");

class UserRepository {
	async createUser(userData) {
		try {
			const newUser = await User.create({
				username: userData.username,
				email: userData.email,
				bio: userData.bio,
			});

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
				throw new NotFound("User", userId);
			}

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
				throw new NotFound("User", userId);
			}

			return updatedUser;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = UserRepository;
