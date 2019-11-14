const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

// @POST - /api/auth/
// @access - Public
// @desc - Auth User & Get Token
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) return res.status(400).json({ message: "User Not Exist" });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) return res.status(400).send("Invalid");

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, "secret", { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      });
    } catch (e) {
      console.error(e);
      res.status(500).send("Server Error");
    }
  }
);

// @GET - /api/auth/
// @access - Private
// @desc - Get Logged In Users
router.get("/", (req, res) => {
  res.send("Get Logged In Users");
});

module.exports = router;
