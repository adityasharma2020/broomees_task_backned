/* 
    in this repository we write the userRepository class, in which we write some functions, using whihc we intereact with the modals.
*/

const { User } = require('../models/index');

class UserRepository {
	async create(data) {
		try {
			const user = await User.create(data);
			return user;
		} catch (error) {
			console.log('somethhing went wrong at repository layer.');
			throw error;
		}
	}

	async destroy(userId) {
		try {
			await User.destroy({ where: { id: userId } });
		} catch (error) {
			console.log('somethhing went wrong at repository layer.');
			throw error;
		}
	}

	async getById(userId) {
		try {
			const user = await User.findByPk(userId, {
				attributes: ['email', 'id'],
			});
			return user;
		} catch (error) {
			console.log('somethhing went wrong at repository layer.');
			throw error;
		}
	}

	async getByEmail(userEmail) {
		try {
			const user = await User.findOne({
				where: {
					email: userEmail,
				},
			});
			return user;
		} catch (error) {
			console.log('somethhing went wrong at repository layer.');
			throw error;
		}
	}
}

module.exports = UserRepository;
