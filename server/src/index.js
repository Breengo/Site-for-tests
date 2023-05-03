require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const models = require("./models/models");
const router = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, (err) => {
      console.log("Server started on 3001");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
