const router = require("express").Router();
const PublicController = require("../../app/controllers/Public");

router.get("/", PublicController.index);

module.exports = router;
