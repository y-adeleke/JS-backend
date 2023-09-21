var express = require("express");
var router = express.Router();
let usersController = require("../app/controllers/users");
/* GET users listing. */
router.get("/", usersController.users);

module.exports = router;
