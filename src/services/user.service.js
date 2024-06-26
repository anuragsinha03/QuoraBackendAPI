class UserService {
	constructor(userRepository) {
		this.userRepository = userRepository;
	}

	async createUser(userData) {
		const user = await this.userRepository.createUser(userData);
		return user;
	}

	async getUser(userId) {
		const user = await this.userRepository.getUser(userId);
		return user;
	}

	async updateUser(userId, userData) {
		const user = await this.userRepository.updateUser(userId, userData);
		return user;
	}
}

module.exports = UserService;
