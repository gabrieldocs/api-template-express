"use strict";
const router = require("express").Router();
const Collection = require("../../app/controllers/Collection");
const CollectionController = Collection();
const { verifyJWT } = require("../../app/middlewares/authenticate");


router.get("/", verifyJWT, CollectionController.index);
router.post("/create", verifyJWT, CollectionController.store);
router.put("/update", verifyJWT, CollectionController.update);
router.post("/delete", verifyJWT, CollectionController.destroy);


module.exports = router;
