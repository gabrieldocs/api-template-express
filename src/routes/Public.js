const router = require("express").Router() 
const PublicController = require("../controllers/Public")

router.get("/", PublicController.index)

module.exports = router 