"use strict";
require("dotenv").config();
const express = require("express");
const Public = require("./src/routes/Public");
const Dashboard = require("./src/routes/Dashboard");
const Auth = require("./src/routes/Auth");
const Collection = require("./src/routes/Collection");
// const Resource = require("./src/routes/Resource");

function Server () {
	let app = express();
	let methods = {
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
			// app.use("/resources", Resource);

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
