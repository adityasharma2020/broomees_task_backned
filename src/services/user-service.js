/* 
    here we put any business logic if required.
*/
const UserRepository = require('../repositories/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/server-config');
const bcrypt = require('bcrypt');

class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}

	async create(data) {
		try {
			const user = await this.userRepository.create(data);
			return user;
		} catch (error) {
			console.log('something went wrong in the signIn process.');
			throw error;
		}
	}

	async signIn(email, plainPassword) {
		try {
			// first we fetch the user using its email
			const user = await this.userRepository.getByEmail(email);
			console.log('user:', user);
			if (!user) {
				console.log('user does not exist.');
				throw { error: 'Incorrect email' };
			}
			//check incoming plainpassword with the encrypted password
			const passwordMatch = this.checkPassword(plainPassword, user.password);

			if (!passwordMatch) {
				console.log('password dosent match');
				throw { error: 'Incorrect password' };
			}

			// if password match create a jwt token, and send it to the user
			const newJWT = this.createToken({ email: user.email, id: user.id });
			return newJWT;
		} catch (error) {
			console.log('something went wrong at services layer.');
			throw error;
		}
	}

	createToken(user) {
		try {
			const result = jwt.sign(user, JWT_KEY, { expiresIn: '1h' });
			return result;
		} catch (error) {
			console.log('something went wrong in token creation.');
			throw error;
		}
	}

	verifyToken(token) {
		try {
			const response = jwt.verify(token, JWT_KEY);
			return response;
		} catch (error) {
			console.log('something went wrong in token verification.');
			throw error;
		}
	}
	checkPassword(userInputPlainPassword, encryptedPassword) {
		try {
			return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
		} catch (error) {
			console.log('something went wrong in password comparison.');
			throw error;
		}
	}
}

module.exports = UserService;
