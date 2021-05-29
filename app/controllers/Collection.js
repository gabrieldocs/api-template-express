"use strict";
const model = require("../models/index");

function Collection () {
	async function index(req, res){
		const id  = req.id;
		console.log(typeof(id));
		const collections = await model.Collections.findAll({
			where:{
				userid:id
			}
		});
		// console.log(typeof(collections[0].userid || null));
		return res.status(200).json({
			collections
		});
	}
	async function store(req, res){
		const collection = await model.Collections.create(req.body);
		return res.status(200).json({
			collection
		});
	}
	async function update(req, res){
		let {id, name, privacy, userid} = req.body;
		const collection = await model.Collections.findOne({where:{id}});
		collection.name = name || collection.name;
		collection.privacy = privacy || collection.privacy;
		collection.userid = userid || collection.userid;
		collection.save();
		return res.status(200).json({
			collection
		});
	}
	async function destroy(req, res){
		let {id} = req.body;
		const collection = await model.Collections.destroy({where:{id}});
		return res.status(200).json({
			collection
		});
	}
	return {
		index,
		store,
		update,
		destroy
	};
}

module.exports = Collection;
