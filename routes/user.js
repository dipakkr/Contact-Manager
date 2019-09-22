const express = require("express");
const router = express.Router();

// @GET - /api/users
// @desc - Get all Users
router.get("/", (req, res) => {
  res.send("Get all users");
});

module.exports = router;
