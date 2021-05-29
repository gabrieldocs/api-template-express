"use strict";
require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
	const token = req.headers["x-access-token"];
	if (!token)
		return res.status(401).json({
			auth: false,
			message: "No token provided",
		});
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (err)
			return res.status(403).json({
				auth: false,
				message: "Failed to authenticate",
			});
		req.email = decoded.email;
		req.id = decoded.id;
		next();
	});
};

module.exports = { verifyJWT };
