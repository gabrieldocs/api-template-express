"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Resources extends Model {
		static associate(models) {
			Resources.belongsTo(models.Collections, {foreignKey: "collectionid"});
		}
	}
	Resources.init({
		id:{
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		url: DataTypes.STRING,
		icon: DataTypes.STRING,
		collectionid: DataTypes.UUID
	}, {
		sequelize,
		modelName: "Resources",
		paranoid: true
	});
	return Resources;
};
