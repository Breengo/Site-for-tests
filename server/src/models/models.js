const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  isStaff: { type: DataTypes.BOOLEAN },
});

const Test = sequelize.define("test", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  subject: { type: DataTypes.STRING },
  questions: { type: DataTypes.ARRAY(DataTypes.JSON) },
});

const Result = sequelize.define("result", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.INTEGER },
});

User.hasMany(Test);
Test.belongsTo(User);

User.hasMany(Result);
Result.belongsTo(User);

Test.hasMany(Result);
Result.belongsTo(Test);

module.exports = {
  User,
  Test,
  Result,
};
