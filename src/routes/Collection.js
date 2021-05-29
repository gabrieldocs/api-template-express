"use strict";
const router = require("express").Router();
const Collection = require("../../app/controllers/Collection");
const CollectionController = Collection();

router.get("/", CollectionController.index);
router.post("/create", CollectionController.store);
router.put("/update", CollectionController.update);
router.post("/delete", CollectionController.destroy);


module.exports = router;
