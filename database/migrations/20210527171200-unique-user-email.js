"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.changeColumn("Users", "email", {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.changeColumn("Users", "email",{
			type: Sequelize.STRING,
			allowNull: null,
			unique: true,
		});
	},
};
