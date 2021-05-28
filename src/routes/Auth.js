"use strict";
const router = require("express").Router();
const Authentication = require("../../app/controllers/Auth");

const AuthController = Authentication();

router.get("/",       AuthController.home);
router.get("/users",  AuthController.index);
router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);
router.post("/register", AuthController.store);
router.get("/delete/:id", AuthController.destroy);


module.exports = router;
