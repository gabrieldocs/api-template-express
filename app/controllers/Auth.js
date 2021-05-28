"use strict";
const bcrypt = require("bcrypt");
const { sign } = require("../middlewares/verisign");
const model = require("../models/index");

// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;

function Authentication () {
	function home(req, res){
		console.log("[Authentication] Return index...");
		res.status(200).json(
			{
				link: `http://localhost:${process.env.PORT}/auth/`
			}
		);
	}
	async function index(req, res){
		console.log("[Authentication] Return index...");
		const myUsers = await model.Users.findAll({
			attributes: {
				exclude: ["password"],
			},
		});
		// console.log(JSON.stringify(users, null, 4))
		res.status(200).json({
			users: myUsers,
		});
	}
	async function store(req, res){
		console.log("[Authentication] Return index...");
		const rounds = 10;
		let { firstName, lastName, email, password, pin, username } = req.body;
		if (!username || username === undefined) username = email;
		if (!pin || pin === undefined) pin = null;
		bcrypt.genSalt(rounds, (err, salt) => {
			bcrypt.hash(password, salt, async (err, hash) => {
				password = hash;
				try {
					let user = await model.Users.create({
						firstName,
						lastName,
						email,
						password,
						username,
						pin,
					});
					user.password = undefined;
					res.status(200).json({
						message: "Succeed in resource creation",
						user: user,
					});
				} catch (e) {
					console.log(e);
					res.status(400).json({
						message: "Failed to create resource",
					});
				}
			});
		});
	}
	async function login(req, res){
		console.log("[Authentication] Generate user JWT - Logs user in!");
		var { email, password } = req.body;
		var token = null;
		if (!email || email == undefined)
			return res.status(400).json({ message: "Missing one or more fields" });
		if (!password || password == undefined)
			return res.status(400).json({ message: "Missing one or more fields" });
		await model.Users.findOne({
			where: {
				email: email,
			},
		})
			.then((response) => {
				return response.dataValues;
			})
			.then(async (data) => {
				bcrypt.compare(password, data.password, function (err, result) {
					if (result === true) {
						data.password = undefined;
						token = sign(data);
						return res.status(200).json({
							token: token,
							user: data,
							date: new Date(),
						});
					} else {
						return res.status(401).json({
							message: "Password mismatch",
							date: new Date(),
						});
					}
				});
			});
	}
	function logout(req, res){
		console.log("[Authentication] Save JWT to blacklist - logs user out!");
		res.status(200).json({
			message: "Logout",
			date: new Date(),
		});
	}
	async function destroy(req, res){
		console.log("[Authentication] Removes user account - performs a paranoid!");
		var id = req.params.id;
		await model.Users.destroy({
			where:{
				id
			}
		});
		return res.status(200).json({
			message: "Done bro",
			id: id
		});
	}
	return {
		home,
		index,
		store,
		login,
		logout,
		destroy
	};
}


module.exports = Authentication;
