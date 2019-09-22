const express = require("express");

const router = express.Router();

// @POST - /api/auth/
// @access - Public
// @desc - Auth User & Get Token
router.post("/", (req, res) => {
  res.send("Log In User");
});

// @GET - /api/auth/
// @access - Private
// @desc - Get Logged In Users
router.get("/", (req, res) => {
  res.send("Get Logged In Users");
});

module.exports = router;
