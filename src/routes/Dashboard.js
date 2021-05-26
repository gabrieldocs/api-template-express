"use strict"

const router = require("express").Router()
const DashboardController = require("../controllers/Dashboard")

router.get("/", DashboardController.index)

module.exports = router 