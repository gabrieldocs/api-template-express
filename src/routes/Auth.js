"use strict"
const router = require("express").Router() 
const AuthController = require("../../app/controllers/Auth")

router.get("/", AuthController.home)
router.get("/login", AuthController.index)
router.post("/login", AuthController.login)
router.get("/logout", AuthController.logout)
router.post("logout")

// Create user 

router.post("/register", AuthController.register)

// Return users 
router.get("/users", AuthController.findAll)

module.exports = router 