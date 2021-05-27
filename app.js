"use strict";
require("dotenv").config();
const express = require("express");
const app = express();

const Public = require("./src/routes/Public");
const Auth = require("./src/routes/Auth");
const Dashboard = require("./src/routes/Dashboard");


app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());


app.use("/", Public);
app.use("/auth", Auth);
app.use("/dashboard", Dashboard);


// Testando a verificação do JWT para rota protegida
const {verifyJWT} = require("./app/middlewares/authenticate");

app.get("/media", verifyJWT ,(req, res)=>{
	res.json({
		message: "teste"
	});
});


module.exports = app;
