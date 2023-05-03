const Router = require("express");
const TestController = require("../controllers/testController");
const router = new Router();

router.post("/create", TestController.createTest);
router.get("/get", TestController.getTest);
router.get("/get_all", TestController.getAllTests);

module.exports = router;
