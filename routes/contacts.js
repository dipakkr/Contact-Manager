const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");

// @GET - /api/contacts/
// @access - Public
// @desc - Get all Contact
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id });
    res.send(contacts);
  } catch (e) {
    console.error(e);
    res.status(500).send("Server Error");
  }
});

// @GET - /api/contacts/
// @access - Private
// @desc - Add Contact Item
router.post("/", auth, async (req, res) => {
  try {
    const { name, email, phone, type } = req.body;
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id
    });
    await newContact.save();
    res.status(200).send({ message: "Upload Succesfull", data: newContact });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Server Error" });
  }
});

// @Update - /api/contacts/:id
// @access - Private
// @desc - Update Contact Item
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;
  let contactFields = {};

  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact)
      return res.status(404).send({ message: "Invalid Contact ID" });

    if (contact.user.toString() !== req.user.id) {
      res.status(401).send({ message: "Authentcation Error" });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.send({ message: "Contact Updated Sucessfully", data: contact });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Server Error" });
  }
});

// @Delete - /api/contacts/
// @access -
// @desc - Delete a Item
router.delete("/:id", (req, res) => {
  res.send("Delete a Contact Item");
});

module.exports = router;
