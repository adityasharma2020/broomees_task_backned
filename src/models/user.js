'use strict';
const { Model } = require('sequelize');
const { SALT } = require('../config/server-config');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// define association here
		}
	}

	User.init(
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			userName: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isPasswordValid(value) {
						const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;
						if (!regex.test(value)) {
							throw new Error(
								'Password must contain at least one uppercase letter, one lowercase letter, one numeric digit, and be at least 4 characters long.'
							);
						}
					},
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);

	User.beforeCreate((user) => {
		const encryptedPassword = bcrypt.hashSync(user.password, SALT);
		user.password = encryptedPassword;
	});

	return User;
};
