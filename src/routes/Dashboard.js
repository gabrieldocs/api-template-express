"use strict";
const router = require("express").Router();
const Dashboard = require("../../app/controllers/Dashboard");
const DashboardController = Dashboard();

router.get("/", DashboardController.index);

module.exports = router;
