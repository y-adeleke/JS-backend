var express = require("express");
var router = express.Router();
let indexController = require("../app/controllers/index");
/* GET home page. */
router.get("/", indexController.home);

module.exports = router;
