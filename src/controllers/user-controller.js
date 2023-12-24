/* 

*/

const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
	try {
		const response = await userService.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			userName: req.body.userName,
			password: req.body.password,
			confirmPassword: req.body.confirmPassword,
		});

		return res.status(201).json({
			message: 'Successfully created an new user.',
			success: true,
			data: response,
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: 'something went wrong',
			data: {},
			success: false,
			err: error,
		});
	}
};

const signIn = async (req, res) => {
	try {
		const response = await userService.signIn(req.body.email, req.body.password);
		return res.status(200).json({
			success:true,
			data:response,
			err:{},
			message:"successfully signed in."
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: 'something went wrong',
			data: {},
			success: false,
			err: error,
		});
	}
};

module.exports = {
	create,
	signIn,
};
