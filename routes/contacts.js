const express = require("express");
const router = express.Router();

// @GET - /api/contacts/
// @access - Public
// @desc - Get all Contact
router.get("/", (req, res) => {
  res.send("Get All Contacts");
});

// @GET - /api/contacts/
// @access - Private
// @desc - Add Contact Item
router.post("/", (req, res) => {
  res.send("Add a Contact Item");
});

// @Update - /api/contacts/:id
// @access - Private
// @desc - Update Contact Item
router.put("/:id", (req, res) => {
  res.send("Update Contact Item");
});

// @Delete - /api/contacts/
// @access -
// @desc - Delete a Item
router.delete("/:id", (req, res) => {
  res.send("Delete a Contact Item");
});

module.exports = router;
