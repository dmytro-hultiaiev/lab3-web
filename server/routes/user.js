const router = require("express").Router();
const jwt = require("jsonwebtoken");

const { User, secretKey } = require("../models/user");

router.get("/profile", async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).send({ message: "Invalid token" });
    req.user = user;
  });

  if (!token) return res.status(401).send({ message: "Unauthorized" });

  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userData = {
      login: user.login,
      email: user.email,
      createdAt: user.createdAt,
      modules: user.modules,
    };
    res.status(200).json(userData);
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
});

router.get("/modules", async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).send({ message: "Invalid token" });
    req.user = user;
  });

  if (!token) return res.status(401).send({ message: "Unauthorized" });

  try {
    const user = await User.findById(req.user._id).populate("modules.terms");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ modules: user.modules });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.post("/modules", async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).send({ message: "Invalid token" });
    req.user = user;
  });

  if (!token) return res.status(401).send({ message: "Unauthorized" });

  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newModule = {
      name: req.body.name,
      terms: req.body.terms,
    };
    user.modules.push(newModule);
    await user.save();
    res.status(201).json({ message: "Module created", module: newModule });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
