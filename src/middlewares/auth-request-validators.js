const validateUserSignup = (req, res, next) => {
	if (
		!req.body.email ||
		!req.body.password ||
		!req.body.userName ||
		!req.body.firstName ||
		!req.body.lastName
	) {
		return res.status(400).json({
			message: 'something went wrong.',
			success: false,
			data: {},
			err: 'Certain fields are missing in the request.',
		});
	}
	next();
};

const validateUserSignIn = (req, res, next) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).json({
			message: 'something went wrong.',
			success: false,
			data: {},
			err: 'Email or password is missing in request.',
		});
	}
	next();
};

module.exports = {
	validateUserSignup,
	validateUserSignIn,
};
