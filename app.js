"use strict";
require("dotenv").config();
const express = require("express");
const Public = require("./src/routes/Public");
const Auth = require("./src/routes/Auth");
const Dashboard = require("./src/routes/Dashboard");
const Collection = require("./src/routes/Collection");

function Server () {
	let app = express();
	const methods = {
		up:function(){
			app.use(
				express.urlencoded({
					extended: true,
				})
			);
			app.use(express.json());
			app.use("/", Public);
			app.use("/auth", Auth);
			app.use("/dashboard", Dashboard);
			app.use("/collections", Collection);

			app.listen(process.env.PORT);

		},
		down: function(){
			console.log("[server] Stopping...");
			app.close();
			console.log("[server] Stopping done!");
		}
	};
	return Object.assign(Object.create({}),methods);
}

module.exports = Server;
