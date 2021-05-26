"use strict"
require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const app = express() 

const Public = require("./src/routes/Public")
const Auth = require("./src/routes/Auth")
const Dashboard = require("./src/routes/Dashboard")


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use("/", Public)
app.use("/auth", Auth)
app.use("/dashboard", Dashboard)

module.exports = app 