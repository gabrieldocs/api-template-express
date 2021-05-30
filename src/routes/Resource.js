"use strict";

const router = require("express").Router();
const Resource = require("../../app/controllers/Resource");
const ResourceController = Resource();
const { verifyJWT } = require("../../app/middlewares/authenticate");

router.get("/", verifyJWT, ResourceController.index);
router.get("/create", verifyJWT, ResourceController.store);
router.get("/update", verifyJWT, ResourceController.update);
router.get("/delete", verifyJWT, ResourceController.destroy);

module.exports = router;
