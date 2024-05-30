const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User, secretKey } = require("../models/user");

router.get("/:id", async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).send({ message: "Invalid token" });
    req.user = user;
  });

  if (!token) return res.status(401).send({ message: "Unauthorized" });

  try {
    const user = await User.findById(req.user._id);
    const module = user.modules.find(
      (item) => req.params.id === item._id.toString()
    );

    if (!module) {
      return res.status(404).json({ message: "Module not found" });
    }
    res.status(200).json(module);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
});

router.delete("/:id", async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).send({ message: "Invalid token" });
    req.user = user;
  });

  if (!token) return res.status(401).send({ message: "Unauthorized" });

  try {
    const user = await User.findById(req.user._id);
    const moduleIndex = user.modules.findIndex(
      (item) => req.params.id === item._id.toString()
    );

    if (moduleIndex === -1) {
      return res.status(404).json({ message: "Module not found" });
    }

    user.modules.splice(moduleIndex, 1);
    await user.save();

    res.status(200).json({ message: "Module deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
