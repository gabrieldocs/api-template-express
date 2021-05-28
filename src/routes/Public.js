const router = require("express").Router();
const Public = require("../../app/controllers/Public");

const PublicController = Public();

router.get("/", PublicController.index);

module.exports = router;
