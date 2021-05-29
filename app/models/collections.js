"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Collections extends Model {
		static associate(models) {
			Collections.belongsTo(models.Users, {foreignKey: "userid"});
		}
	}
	Collections.init({
		id:{
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		name: DataTypes.STRING,
		privacy: DataTypes.BOOLEAN,
		icon: DataTypes.STRING,
	}, {
		sequelize,
		paranoid:true,
		modelName: "Collections",
	});
	return Collections;
};
