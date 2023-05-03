const { User } = require("../models/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserController {
  async registration(req, res) {
    const { login, password, isStaff } = req.body;
    const hashedPassword = await bcrypt.hash(password, 6);
    const user = await User.create({
      login,
      password: hashedPassword,
      isStaff,
    });
    const token = jwt.sign(
      {
        id: user.id,
        login: user.login,
        isStaff: user.isStaff,
      },
      process.env.PRIVATE_KEY
    );
    return res
      .status(200)
      .json({ token, login: user.login, id: user.id, isStaff: user.isStaff });
  }
  async auth(req, res) {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (!user) {
      return res.status(404).json("No such user");
    }
    const rightPassword = await bcrypt.compare(password, user.password);
    if (!rightPassword) {
      return res.status(500).json("Incorrect password");
    }
    const token = jwt.sign(
      {
        id: user.id,
        login: user.login,
        isStaff: user.isStaff,
      },
      process.env.PRIVATE_KEY
    );
    return res
      .status(200)
      .json({ token, login: user.login, id: user.id, isStaff: user.isStaff });
  }
  async check(req, res) {
    try {
      const { token } = req.headers;
      if (!token) {
        return res.status(500).json("Unathorized");
      }
      const isValid = jwt.verify(token, process.env.PRIVATE_KEY);
      if (!isValid) {
        return res.status(500).json("Unathorized");
      }
      return res.status(200).json(isValid);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new UserController();
