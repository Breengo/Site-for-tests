const { Test, User } = require("../models/models");

class TestController {
  async createTest(req, res) {
    const { title, subject, questions, userId } = req.body;
    const test = await Test.create({ title, subject, questions, userId });
    return res.status(200).json(test);
  }
  async getAllTests(req, res) {
    const tests = await Test.findAll({
      include: [{ model: User, attributes: ["login"] }],
    });
    return res.status(200).json(tests);
  }
  async getTest(req, res) {
    const { id } = req.query;
    const test = await Test.findOne({ where: { id } });
    return res.status(200).json(test);
  }
}

module.exports = new TestController();
