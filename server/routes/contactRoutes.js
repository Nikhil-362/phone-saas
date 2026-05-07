const router = require("express").Router();

const Contact = require("../models/Contact");

const auth = require("../middleware/auth");

/* Add Contact */
router.post(
  "/",
  auth,
  async (req, res) => {

    try {

      const contact = new Contact({
        userId: req.user.id,
        ...req.body,
      });

      await contact.save();

      res.json(contact);

    } catch (err) {

      res.status(500).json(err);

    }
  }
);

/* Get Contacts */
router.get(
  "/",
  auth,
  async (req, res) => {

    try {

      const contacts =
        await Contact.find({
          userId: req.user.id,
        });

      res.json(contacts);

    } catch (err) {

      res.status(500).json(err);

    }
  }
);

/* Delete Contact */
router.delete(
  "/:id",
  auth,
  async (req, res) => {

    try {

      await Contact.findByIdAndDelete(
        req.params.id
      );

      res.json("Deleted");

    } catch (err) {

      res.status(500).json(err);

    }
  }
);

module.exports = router;