"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Resources", {
			id: {
				allowNull: false,
				autoIncrement: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4
			},
			name: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.TEXT
			},
			url: {
				type: Sequelize.STRING
			},
			icon: {
				type: Sequelize.STRING
			},
			collectionid: {
				type: Sequelize.UUID,
				references:{
					model: "Collections",
					key: "id"
				}
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedAt: {
				allowNull: true,
				default:null,
				type: Sequelize.DATE
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Resources");
	}
};
