const { _attributes } = require("../db");
const { User } = require("../models/models");
const { Result } = require("../models/models");

class ResultController {
  async createResult(req, res) {
    const { value, userId, testId } = req.body;
    const existedResult = await Result.findOne({
      where: [{ userId }, { testId }],
    });
    if (existedResult) {
      return res.status(500).json("Already exist");
    }
    const result = await Result.create({ value, userId, testId });
    return res.status(200).json(result);
  }
  async getResult(req, res) {
    const { userId, testId } = req.body;
    const existedResult = await Result.findOne({
      where: [{ userId }, { testId }],
    });
    if (!existedResult) {
      return res.status(404).json("No result");
    }
    return res.status(200).json(existedResult);
  }
  async getTestResults(req, res) {
    const { testId } = req.body;
    const existedResult = await Result.findAll({
      where: { testId },
      include: [{ model: User, attributes: ["login"] }],
    });
    if (!existedResult) {
      return res.status(404).json("No result");
    }
    return res.status(200).json(existedResult);
  }
}

module.exports = new ResultController();
