const Router = require("express");
const ResultController = require("../controllers/resultController");
const router = new Router();

router.post("/create", ResultController.createResult);
router.post("/get", ResultController.getResult);
router.post("/get_all", ResultController.getTestResults);

module.exports = router;
