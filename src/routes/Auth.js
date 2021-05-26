"use strict"
const router = require(`express`).Router() 
const AuthController = require(`../controllers/Auth`)

router.get(`/`, AuthController.home)
router.get(`/login`, AuthController.login)
router.get(`/logout`, AuthController.logout)

module.exports = router 