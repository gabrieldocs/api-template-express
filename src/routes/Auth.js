"use strict"
const router = require("express").Router() 
const AuthController = require("../controllers/Auth")

router.get("/", AuthController.home)
router.get("/login", AuthController.login)
router.post("/login", AuthController.loginv1)
router.get("/logout", AuthController.logout)
router.post("logout")

module.exports = router 