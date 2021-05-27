"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate(models) {
			// define association here
		}
	}
	Users.init(
		{
			id:{
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4
			},
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			pin: DataTypes.STRING,
			username: DataTypes.STRING,
		},
		{
			sequelize,
			paranoid: true,
			modelName: "Users",
		}
	);
	return Users;
};
