"use strict";
const model = require("../models/resources");
function Resource(){
	let methods = {
		index: async function(req,  res) {
			let resources = model.Resources.findAll();
			return res.status(200).json({
				resources: resources
			});
		},
		store: async function(req, res){
			let resource = model.Resources.create(req.body);
			return res.status(200).json({
				resource: resource
			});
		},
		update: async function(req, res){
			let {id} = req.body;
			let resource = await model.Resources.findOne({where:{id:id}});
			let keys = Object.keys(resource.dataValues);
			keys.forEach(element => {
				resource[element] = req.body[element] || resource[element];
			});
			resource.save();
			return res.status(200).json({
				status: "success",
				resource: resource
			});
		},
		destroy: async function(req, res){
			let {id} = req.body;
			let resource = model.Resources.destroy({where:{id:id}});
			return res.statu(200).json({
				status: "success",
				resource: resource
			});
		}
	};
	return Object.assign(Object.create({}, methods));
}
module.exports = Resource;
