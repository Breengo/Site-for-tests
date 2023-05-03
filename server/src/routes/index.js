const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const testRouter = require("./testRouter");
const resultRouter = require("./resultRouter");

router.use("/user", userRouter);
router.use("/result", resultRouter);
router.use("/test", testRouter);

module.exports = router;
