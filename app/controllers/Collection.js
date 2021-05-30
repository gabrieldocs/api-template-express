"use strict";
const model = require("../models/index");

function Collection () {
	var methods = {
		index: async function (req, res){
			const id  = req.id;
			console.log(typeof(id));
			const collections = await model.Collections.findAll({
				where:{
					userid:id
				}
			});
			return res.status(200).json({
				collections
			});
		},
		store: async function (req, res){
			const collection = await model.Collections.create(req.body);
			return res.status(200).json({
				collection
			});
		},
		update: async function (req, res){
			let {id} = req.body;
			const collection = await model.Collections.findOne({where:{id:id}});
			let keys = Object.keys(collection.dataValues);
			keys.forEach(element => {
				collection[element] = req.body[element] || collection[element];
			});
			collection.save();
			return res.status(200).json({
				collection
			});
		},
		destroy: async function (req, res){
			let {id} = req.body;
			const collection = await model.Collections.destroy({where:{id}});
			return res.status(200).json({
				collection
			});
		}
	};
	return Object.assign(Object.create({}), methods);
}

module.exports = Collection;
