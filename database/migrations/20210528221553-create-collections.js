"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Collections", {
			id: {
				type: Sequelize.UUID,
				allowNull: false,
				primaryKey: true,
				unique: true,
				defaultValue: Sequelize.UUIDV4,
				autoIncrement: false
			},
			name: {
				type: Sequelize.STRING
			},
			privacy: {
				type: Sequelize.ENUM("public", "private")
			},
			icon: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			userid:{
				type: Sequelize.UUID,
				references:{
					model: "Users",
					key: "id"
				}
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedAt: {
				allowNull: true,
				default: null,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Collections");
	}
};
