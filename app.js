"use strict";
require("dotenv").config();
const express = require("express");
const Public = require("./src/routes/Public");
const Auth = require("./src/routes/Auth");
const Dashboard = require("./src/routes/Dashboard");


function Server () {
	let app = express();
	function up(){
		app.use(
			express.urlencoded({
				extended: true,
			})
		);
		app.use(express.json());

		console.info("[server] Starting...");

		app.use("/", Public);
		app.use("/auth", Auth);
		app.use("/dashboard", Dashboard);

		// Testando a verificação do JWT para rota protegida
		const { verifyJWT } = require("./app/middlewares/authenticate");

		app.get("/media", verifyJWT, (req, res) => {
			res.json({
				message: "teste",
			});
		});
		app.listen(process.env.PORT);

	}
	function down(){
		console.log("[server] Stopping...");
		app.close();
		console.log("[server] Stopping done!");
	}
	return {
		up,
		down
	};
}

module.exports = Server;
