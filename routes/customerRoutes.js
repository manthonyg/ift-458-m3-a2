const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.route("/").get(customerController.getAllCustomers);

module.exports = router;
